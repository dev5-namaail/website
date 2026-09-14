/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { T } from "../../i18n/translations";
import styles from "./Chatbot.module.css";
import { getReply, getQuickReplies } from "./chatbotData";

const LINK_TOKEN = /\[\[([^\]|]+)\|([^\]]+)\]\]/g;

const QUICK_ROUTES = {
  DocuArena: "/Docuarena",
  AIOCR: "/AIOCR",
  "ROI Calculator": "/DocumentRetrieval",
  "Calculateur ROI": "/DocumentRetrieval",
  "حاسبة العائد": "/DocumentRetrieval",
  Contact: "/contact",
  "تواصل معنا": "/contact",
};

function renderText(text, onNavigate) {
  const parts = String(text).split(/(\[\[[^\]]+\]\])/g);
  return parts.map((part, i) => {
    const match = LINK_TOKEN.exec(part);
    LINK_TOKEN.lastIndex = 0;
    if (match) {
      return (
        <button key={i} type="button" className={styles.linkBtn} onClick={() => onNavigate(match[2])}>
          {match[1]}
        </button>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.9 1.56 5.45 3.98 7.06-.12.93-.56 2.25-1.9 3.69-.15.17-.06.43.17.47 1.96.36 3.4-1.1 3.86-2.05.22-.37-.3-.69-.65-.44A7.6 7.6 0 0 1 5 14.77C3.67 13.54 3 12.46 3 11.25 3 6.86 7.03 3.5 12 3.5s9 3.36 9 7.75-4.03 7.75-9 7.75c-.67 0-1.32-.06-1.94-.18-.47.36-.94.7-1.44 1a.4.4 0 0 1-.4.02 3.06 3.06 0 0 1-1.62-1.4.28.28 0 0 0-.4-.11.28.28 0 0 0-.12.37c.62 1.28 1.66 2.27 2.98 2.65-.9 1.3-2.6 2.32-4.06 2.4z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M18.3 5.71a1 1 0 0 0-1.42 0L12 10.59 7.12 5.7A1 1 0 0 0 5.7 7.12L10.59 12l-4.9 4.88a1 1 0 1 0 1.42 1.42L12 13.41l4.88 4.9a1 1 0 0 0 1.42-1.42L13.41 12l4.9-4.88a1 1 0 0 0 0-1.42z" />
    </svg>
  );
}

export default function Chatbot({ lang = "en" }) {
  const t = T[lang];
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [canStart, setCanStart] = useState(false);
  const [canEnd, setCanEnd] = useState(false);
  const listRef = useRef(null);
  const quickRef = useRef(null);
  const firstOpen = useRef(false);

  const updateScrollState = useCallback(() => {
    const el = quickRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft);
    setCanStart(pos > 4);
    setCanEnd(pos < max - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const onResize = () => updateScrollState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateScrollState, open, lang, messages.length]);

  useEffect(() => {
    if (open && !firstOpen.current) {
      firstOpen.current = true;
      setMessages([{ from: "bot", text: getReply(lang, "__greeting__") }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  function goTo(path) {
    navigate(path);
  }

  function scrollQuickStep(dir) {
    const el = quickRef.current;
    if (!el) return;
    const isRtl = (el.dir === "rtl" || getComputedStyle(el).direction === "rtl");
    const delta = 160 * dir;
    el.scrollBy({ left: isRtl ? -delta : delta, behavior: "smooth" });
  }

  function handleQuickClick(q) {
    send(q);
    const route = QUICK_ROUTES[q];
    if (route) {
      setTimeout(() => navigate(route), 350);
    }
    requestAnimationFrame(() => {
      const el = quickRef.current;
      if (!el) return;
      const target = Array.from(el.children).find((c) => c.textContent === q);
      if (target) target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  }

  function send(text) {
    const value = (text ?? input).trim();
    if (!value) return;
    setActiveTab(getQuickReplies(lang).includes(value) ? value : null);
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setTyping(true);
    const reply = getReply(lang, value);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    }, 500 + Math.min(800, value.length * 12));
  }

  const quick = getQuickReplies(lang);

  return (
    <div className={`${styles.wrap} ${t.dir === "rtl" ? styles.rtl : ""}`} dir={t.dir}>
      {open && (
        <div className={styles.panel} role="dialog" aria-label={t["chat-title"]}>
          <header className={styles.header}>
            <div className={styles.headerInfo}>
              <div>
                <strong className={styles.title}>{t["chat-title"]}</strong>
              </div>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label={t["chat-close"]}
            >
              <CloseIcon />
            </button>
          </header>

          <div className={styles.messages} ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`${styles.bubble} ${m.from === "user" ? styles.user : styles.bot}`}>
                {m.from === "user" ? m.text : renderText(m.text, goTo)}
              </div>
            ))}
            {typing && (
              <div className={`${styles.bubble} ${styles.bot} ${styles.typingBubble}`}>
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
                <span className={styles.typingDot} />
              </div>
            )}
          </div>

          {messages.length > 0 && (
            <div className={styles.quickWrap}>
              {canStart && (
                <button
                  type="button"
                  className={`${styles.quickArrow} ${styles.quickArrowStart}`}
                  onClick={() => scrollQuickStep(-1)}
                  aria-label={t["chat-scroll-back"]}
                />
              )}
              <div
                className={styles.quickRow}
                ref={quickRef}
                onScroll={updateScrollState}
              >
                {quick.map((q) => (
                  <button
                    key={q}
                    type="button"
                    className={`${styles.quickChip}${activeTab === q ? ` ${styles.quickChipActive}` : ""}`}
                    onClick={() => handleQuickClick(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
              {canStart && <span className={styles.quickFadeStart} />}
              {canEnd && (
                <>
                  <button
                    type="button"
                    className={`${styles.quickArrow} ${styles.quickArrowEnd}`}
                    onClick={() => scrollQuickStep(1)}
                    aria-label={t["chat-scroll-more"]}
                  />
                  <span className={styles.quickFadeEnd} />
                </>
              )}
            </div>
          )}

          <form
            className={styles.inputRow}
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t["chat-placeholder"]}
              aria-label={t["chat-placeholder"]}
            />
            <button type="submit" className={styles.sendBtn} disabled={!input.trim()}>
              {t["chat-send"]}
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className={styles.fab}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t["chat-close"] : t["chat-open"]}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}


