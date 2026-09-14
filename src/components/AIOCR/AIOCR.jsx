import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  LuArrowRight, LuCheck, LuCircleAlert, LuCloudUpload, LuCopy, LuDownload,
  LuFileText, LuFileType, LuGlobe, LuLock, LuShieldCheck, LuSparkles,
  LuTarget, LuX, LuZap,
} from "react-icons/lu";
import styles from "./AIOCR.module.css";
import { T } from "../../i18n/translations";

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const MAX_SIZE_MB = 10;
const MAX_SIZE = MAX_SIZE_MB * 1024 * 1024;

const ACCEPTED = [
  "image/jpeg", "image/jpg", "image/png",
  "image/tiff", "image/x-tiff", "application/pdf",
  ".jpg", ".jpeg", ".png", ".tif", ".tiff", ".pdf",
];

const LANGUAGES = [
  { id: "auto", label: "Auto Detect", value: "auto" },
  { id: "ar", label: "Arabic", value: "ar" },
  { id: "en", label: "English", value: "en" },
  { id: "ar+en", label: "Arabic + English", value: "ar+en" },
];

const FILE_TYPES = ["JPG", "JPEG", "PNG", "TIFF", "PDF"];

const BADGES = [
  { icon: LuTarget, label: "aiocr-badge-accuracy", value: "aiocr-badge-accuracy-value" },
  { icon: LuZap, label: "aiocr-badge-fast", value: "aiocr-badge-fast-value" },
  { icon: LuShieldCheck, label: "aiocr-badge-secure", value: "aiocr-badge-secure-value" },
];

const FEATURES = [
  { icon: LuGlobe, title: "aiocr-feature-multi-lang-title", desc: "aiocr-feature-multi-lang-desc" },
  { icon: LuTarget, title: "aiocr-feature-accuracy-title", desc: "aiocr-feature-accuracy-desc" },
  { icon: LuFileText, title: "aiocr-feature-smart-title", desc: "aiocr-feature-smart-desc" },
  { icon: LuDownload, title: "aiocr-feature-formats-title", desc: "aiocr-feature-formats-desc" },
  { icon: LuLock, title: "aiocr-feature-secure-title", desc: "aiocr-feature-secure-desc" },
  { icon: LuZap, title: "aiocr-feature-fast-title", desc: "aiocr-feature-fast-desc" },
];

const PRETTY_SKELETONS = ["w60", "w80", "w72", "w88", "w50", "w76"];

/* ─────────────────────────────────────────────
   Utilities
───────────────────────────────────────────── */
const cx = (...names) => names.filter(Boolean).join(" ");

const prettySize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
};

const escapeHtml = (str) =>
  String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const validateFile = (file) => {
  const ext = "." + (file.name.split(".").pop() || "").toLowerCase();
  if (!ACCEPTED.includes(file.type) && !ACCEPTED.includes(ext)) {
    return `${file.name} isn't a supported format. Use JPG, PNG, TIFF or PDF.`;
  }
  if (file.size > MAX_SIZE) return `${file.name} is ${prettySize(file.size)}. The limit is ${MAX_SIZE_MB} MB.`;
  if (file.size === 0) return `${file.name} is empty. Pick another file.`;
  return null;
};

const readOcrPayload = (payload) => {
  if (typeof payload === "string") return { text: payload };
  const body = payload?.data && typeof payload.data === "object" ? payload.data : payload;
  const text =
    body?.text ?? body?.result ?? body?.extractedText ?? body?.content ??
    (Array.isArray(body?.pages) ? body.pages.map((p) => p.text || "").join("\n\n") : "");
  return {
    text: typeof text === "string" ? text : "",
    language: body?.language ?? body?.detectedLanguage ?? null,
    confidence: typeof body?.confidence === "number" ? body.confidence : null,
    pages: body?.pageCount ?? (Array.isArray(body?.pages) ? body.pages.length : null),
  };
};

/* ─────────────────────────────────────────────
   Icons
───────────────────────────────────────────── */
const LangGlyph = (props) => {
  const kind = props.kind;
  if (kind === "auto") return <LuSparkles size={16} strokeWidth={1.8} />;
  if (kind === "ar") return <span className={styles.langGlyph} aria-hidden="true">ع</span>;
  if (kind === "en") return <span className={styles.langGlyph} aria-hidden="true">A</span>;
  return <span className={`${styles.langGlyph} ${styles.langGlyphDual}`} aria-hidden="true">ع<i>A</i></span>;
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function AIOCR({
  apiUrl = "/api/ocr",
  fileField = "file",
  langField = "language",
  headers = {},
  onResult,
  currentLang = "en",
}) {
  const t = T[currentLang] || T.en;
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [language, setLanguage] = useState("auto");
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [copied, setCopied] = useState(false);

  const inputRef = useRef(null);
  const dropRef = useRef(null);
  const abortRef = useRef(null);
  const resultsRef = useRef(null);

  useEffect(() => () => { if (previewUrl) URL.revokeObjectURL(previewUrl); }, [previewUrl]);
  useEffect(() => () => abortRef.current?.abort(), []);

  const rtl = useMemo(() => {
    if (!result?.text) return false;
    const arabic = (result.text.match(/[\u0600-\u06FF]/g) || []).length;
    const latin = (result.text.match(/[A-Za-z]/g) || []).length;
    return arabic > latin;
  }, [result]);

  const acceptFile = useCallback((incoming) => {
    if (!incoming) return;
    const message = validateFile(incoming);
    if (message) { setError(message); setStatus("error"); return; }
    setError(null);
    setResult(null);
    setStatus("idle");
    setFile(incoming);
    setPreviewUrl((old) => {
      if (old) URL.revokeObjectURL(old);
      return incoming.type.startsWith("image/") ? URL.createObjectURL(incoming) : null;
    });
  }, []);

  const clearFile = useCallback(() => {
    abortRef.current?.abort();
    setFile(null);
    setResult(null);
    setError(null);
    setStatus("idle");
    setPreviewUrl((old) => { if (old) URL.revokeObjectURL(old); return null; });
    if (inputRef.current) inputRef.current.value = "";
  }, []);

  const onDragOver = (e) => e.preventDefault();
  const onDragEnter = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = (e) => {
    if (!dropRef.current?.contains(e.relatedTarget)) setDragging(false);
  };
  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    acceptFile(e.dataTransfer?.files?.[0]);
  };

  const extract = useCallback(async () => {
    if (!file || status === "working") return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    setStatus("working");
    setError(null);
    setResult(null);

    const form = new FormData();
    form.append(fileField, file, file.name);
    form.append(langField, language);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: form,
        headers,
        signal: controller.signal,
      });
      const contentType = res.headers.get("content-type") || "";
      const payload = contentType.includes("application/json")
        ? await res.json()
        : await res.text();

      if (!res.ok) {
        const serverMessage =
          (typeof payload === "object" && (payload.message || payload.error || payload.title)) ||
          (typeof payload === "string" && payload.slice(0, 200));
        throw new Error(serverMessage || `The server returned ${res.status}.`);
      }

      const parsed = readOcrPayload(payload);
      if (!parsed.text.trim()) throw new Error(t['aiocr-error-no-text']);

      setResult(parsed);
      setStatus("done");
      onResult?.(parsed);
      requestAnimationFrame(() =>
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    } catch (err) {
      if (err.name === "AbortError") { setStatus("idle"); return; }
      setError(err.message || t['aiocr-error-generic']);
      setStatus("error");
    }
  }, [file, language, apiUrl, fileField, langField, headers, status, onResult]);

  const copyText = async () => {
    if (!result?.text) return;
    try {
      await navigator.clipboard.writeText(result.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setError(t['aiocr-error-copy']);
    }
  };

  const saveBlob = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const baseName = (file?.name || "namaa-ocr").replace(/\.[^.]+$/, "");

  const downloadTxt = () => {
    if (!result?.text) return;
    saveBlob(new Blob(["\uFEFF" + result.text], { type: "text/plain;charset=utf-8" }), `${baseName}.txt`);
  };

  const downloadWord = () => {
    if (!result?.text) return;
    const html =
      `<html xmlns:o="urn:schemas-microsoft-com:office:office" ` +
      `xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">` +
      `<head><meta charset="utf-8"><title>${escapeHtml(baseName)}</title></head>` +
      `<body dir="${rtl ? "rtl" : "ltr"}">` +
      `<div style="font-family:'Segoe UI',Tahoma,Arial,sans-serif;font-size:12pt;line-height:1.9;white-space:pre-wrap;` +
      `text-align:${rtl ? "right" : "left"}">${escapeHtml(result.text)}</div>` +
      `</body></html>`;
    saveBlob(new Blob(["\uFEFF" + html], { type: "application/msword;charset=utf-8" }), `${baseName}.doc`);
  };

  const working = status === "working";
  const s = styles;

const resultActions = [
  { icon: copied ? LuCheck : LuCopy, label: copied ? t['aiocr-results-copied'] : t['aiocr-results-copy'], onClick: copyText },
  { icon: LuDownload, label: t['aiocr-results-download-txt'], onClick: downloadTxt },
  { icon: LuFileType, label: t['aiocr-results-download-word'], onClick: downloadWord },
];

  return (
    <div className={s.ocrPage}>

      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            <span className={s.heroEyebrow}>{t['aiocr-hero-eyebrow']}</span>
            <h1 className={s.heroTitle}>
              {t['aiocr-hero-title-1']}<br />
              <span>{t['aiocr-hero-title-2']}</span>
            </h1>
            <p className={s.heroDesc}>{t['aiocr-hero-desc']}</p>
            <p className={s.heroSub}>{t['aiocr-hero-sub']}</p>

            <ul className={s.badges}>
              {BADGES.map((b) => (
                <li key={b.label} className={s.badge}>
                  <span className={s.badgeIcon}><b.icon /></span>
                  <span>{t[b.label]}<br /><strong>{t[b.value]}</strong></span>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.heroVisual} aria-hidden="true">
            <figure className={cx(s.paper, s.paperIn)}>
              <figcaption className={s.tag}>{t['aiocr-tag-image']}</figcaption>
              {previewUrl ? (
                <img src={previewUrl} alt="" className={s.paperImg} />
              ) : (
                <div className={s.scanPlaceholder}><div className={s.scanCircle} /></div>
              )}
            </figure>

            <span className={s.arrow}><LuArrowRight size={18} strokeWidth={1.8} /></span>

            <figure className={s.paper}>
              <figcaption className={cx(s.tag, s.tagBlue)}>{t['aiocr-tag-result']}</figcaption>
              <div className={s.outputCard}>
                {PRETTY_SKELETONS.map((w) => (
                  <span key={w} className={cx(s.skeletonLineBlue, s[w])} />
                ))}
              </div>
              <div className={s.outputFooter}>
                <span className={s.miniTag}><LuCopy size={17} strokeWidth={1.8} /> {t['aiocr-mini-copy']}</span>
                <span className={s.miniTag}><LuDownload strokeWidth={1.8} /> {t['aiocr-mini-download']}</span>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ── UPLOAD + FEATURES ── */}
      <section className={s.midSection}>
        <div className={s.uploadCard}>
          <div
            ref={dropRef}
            className={cx(s.dropZone, dragging && s.isDrag, file && s.hasFile)}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => !file && inputRef.current?.click()}
            onKeyDown={(e) => {
              if (!file && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                inputRef.current?.click();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Upload your document"
          >
            {!file ? (
              <>
                <span className={s.dropIcon}><LuCloudUpload size={34} strokeWidth={1.8} /></span>
                <h3 className={s.dropTitle}>{t['aiocr-upload-title']}</h3>
                <p className={s.dropHint}>{t['aiocr-upload-hint']}</p>
                <span className={cx(s.btn, s.btnPrimary, s.dropBtn)}>{t['aiocr-upload-btn']}</span>
                <p className={s.dropFormats}>
                  {t['aiocr-upload-formats'].replace('{maxSize}', MAX_SIZE_MB)}
                </p>
              </>
            ) : (
              <div className={s.filePreview} onClick={(e) => e.stopPropagation()}>
                <div className={s.fileThumb}>
                  {previewUrl
                    ? <img src={previewUrl} alt={`Preview of ${file.name}`} />
                    : <span>{(file.name.split(".").pop() || "").toUpperCase()}</span>}
                </div>
                <div className={s.fileMeta}>
                  <p className={s.fileName} title={file.name}>{file.name}</p>
                  <p className={s.fileSize}>{prettySize(file.size)}</p>
                  <div className={s.fileLinks}>
                    <button type="button" className={s.linkBtn} onClick={() => inputRef.current?.click()}>{t['aiocr-upload-replace']}</button>
                    <button type="button" className={cx(s.linkBtn, s.muted)} onClick={clearFile}>{t['aiocr-upload-remove']}</button>
                  </div>
                </div>
                <button type="button" className={s.iconBtn} onClick={clearFile} aria-label="Remove file"><LuX size={16} strokeWidth={1.8} /></button>
              </div>
            )}

            <input
              ref={inputRef}
              type="file"
              className={s.hiddenInput}
              accept={ACCEPTED.join(",")}
              onChange={(e) => acceptFile(e.target.files?.[0])}
            />
          </div>

          <fieldset className={s.langsFieldset}>
            <legend className={s.langsTitle}>{t['aiocr-lang-title']}</legend>
            <div className={s.langsRow} role="radiogroup" aria-label="Document language">
              {LANGUAGES.map((l) => {
                const key = l.id === "ar+en" ? "aiocr-lang-both" : `aiocr-lang-${l.id}`;
                return (
                  <button
                    key={l.id}
                    type="button"
                    role="radio"
                    aria-checked={language === l.value}
                    className={cx(s.langBtn, language === l.value && s.isOn)}
                    onClick={() => setLanguage(l.value)}
                  >
                    <LangGlyph kind={l.id} />
                    <span>{t[key] || l.label}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {error && (
            <p className={s.error} role="alert">
              <LuCircleAlert size={18} strokeWidth={1.8} /><span>{error}</span>
            </p>
          )}

          <div className={s.actions}>
            <button
              type="button"
              className={cx(s.btn, s.btnPrimaryLg)}
              onClick={extract}
              disabled={!file || working}
            >
              {working ? (<><span className={s.spinner} />{t['aiocr-extracting']}</>) : t['aiocr-extract-btn']}
            </button>
            {working && (
              <button type="button" className={cx(s.btn, s.btnGhost)} onClick={() => abortRef.current?.abort()}>
                {t['aiocr-cancel']}
              </button>
            )}
          </div>
        </div>

        <div className={s.featuresCol}>
          <h2 className={s.sectionTitle}>{t['aiocr-features-title']}</h2>
          <p className={s.sectionSub}>{t['aiocr-features-sub']}</p>

          <ul className={s.featuresGrid}>
            {FEATURES.map((f) => (
              <li key={f.title} className={s.featureItem}>
                <span className={s.featureIcon}><f.icon /></span>
                <div><h3>{t[f.title]}</h3><p>{t[f.desc]}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className={s.resultsSection} ref={resultsRef}>
        <div className={s.resultsCard}>
          <div>
            <h2 className={s.sectionTitle}>{t['aiocr-results-title']}</h2>
            <p className={s.sectionSub}>{t['aiocr-results-sub']}</p>
            <div className={s.flow} aria-hidden="true">
              <span className={s.flowDoc} />
              <LuArrowRight size={18} strokeWidth={1.8} />
              <span className={s.flowAi}>AI</span>
              <LuArrowRight size={18} strokeWidth={1.8} />
              <span className={s.flowDocClean} />
            </div>
          </div>

          <div className={s.panes}>
            <figure className={s.pane}>
              <figcaption className={s.tag}>{t['aiocr-results-original']}</figcaption>
              <div className={s.paneImage}>
                {previewUrl ? (
                  <img src={previewUrl} alt={file ? `Preview of ${file.name}` : ""} />
                ) : file ? (
                  <p className={s.paneEmpty}>{file.name}</p>
                ) : (
                  <p className={s.paneEmpty}>{t['aiocr-results-empty']}</p>
                )}
              </div>
            </figure>

            <figure className={s.pane}>
              <figcaption className={cx(s.tag, s.tagBlue)}>{t['aiocr-results-extracted']}</figcaption>
              <div className={s.paneBody}>
                {working && (
                  <div className={cx(s.paneEmpty, s.paneLoading)}>
                    <span className={s.spinnerDark} />
                    {t['aiocr-results-reading']}
                  </div>
                )}
                {!working && result && (
                  <>
                    {(result.language || result.confidence != null || result.pages) && (
                      <p className={s.paneMeta}>
                        {result.language && <span className={s.paneMetaTag}>{result.language}</span>}
                        {result.confidence != null && <span className={s.paneMetaTag}>{t['aiocr-results-confidence'].replace('{value}', Math.round(result.confidence * 100))}</span>}
                        {result.pages && <span className={s.paneMetaTag}>{t['aiocr-results-pages'].replace('{count}', result.pages)}</span>}
                      </p>
                    )}
                    <pre className={rtl ? s.extractedTextRtl : s.extractedText} dir={rtl ? "rtl" : "ltr"}>{result.text}</pre>
                  </>
                )}
                {!working && !result && (
                  <p className={s.paneEmpty}>{t['aiocr-results-placeholder']}</p>
                )}
              </div>
              <div className={s.paneFooter}>
                {resultActions.map((a) => (
                  <button
                    key={a.label}
                    type="button"
                    className={cx(s.btn, s.btnSoft, s.paneFooterBtn)}
                    onClick={a.onClick}
                    disabled={!result}
                  >
                    <a.icon size={17} strokeWidth={1.8} /> {a.label}
                  </button>
                ))}
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={s.ctaBanner}>
        <div className={s.ctaBannerInner}>
          <div>
            <span className={s.pill}><LuSparkles size={16} strokeWidth={1.8} /> {t['aiocr-cta-pill']}</span>
            <h2 className={s.ctaTitle}>{t['aiocr-cta-title']}</h2>
            <p className={s.ctaSub}>{t['aiocr-cta-sub']}</p>
          </div>

          <button
            type="button"
            className={cx(s.btn, s.btnWhite, s.btnLg)}
            onClick={() => {
              inputRef.current?.click();
              dropRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            {t['aiocr-cta-btn']} <LuArrowRight size={18} strokeWidth={1.8} />
          </button>

          <div className={s.typesCol}>
            <p className={s.typesTitle}>{t['aiocr-cta-types-title']}</p>
            <ul className={s.typesList}>
              {FILE_TYPES.map((type) => (
                <li key={type} className={s.typeItem}>
                  <span className={s.typeIcon}><LuFileText strokeWidth={1.8} /></span>{type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}