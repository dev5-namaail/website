# AGENTS.md - Codex Claude Compatibility Layer

## Startup Instructions for Codex
At the start of every Codex session in this repository:
1. Read this file first.
2. Read `.claude/CLAUDE.md` for project identity, architecture, active decisions, and orchestration rules.
3. Read `.claude/compatibility/cache.json` when present to discover current Claude command, agent, and skill indexes.
4. When a user references a Claude command, agent, or skill, resolve it through `.claude/compatibility/cache.json`, then read the referenced source file before acting.
5. Apply Claude project rules from `.claude/CLAUDE.md` and use `.claude/commands/*.md`, `.claude/agents/*.md`, and `.claude/skills/*.md` as workflow instructions whenever possible.
6. If the cache is missing, stale, or contradicted by files on disk, run the `/sync` compatibility workflow defined in `.claude/commands/sync.md`.

## Project Identity
- **Name:** Document Retrieval ROI Calculator
- **Stack:** React 18 + Vite, HashRouter, CSS Modules, i18n (EN/AR/FR)
- **Entry:** `src/main.jsx` -> `src/App.jsx`
- **No state management library** (local `useState` only)
- **No TypeScript** (plain JSX/JS)

## Architecture Snapshot
| Path | Purpose |
|------|---------|
| `src/components/DocumentRetrieval/` | Main feature: multi-step ROI wizard |
| `src/components/DocumentRetrieval/steps/` | 5 wizard steps (`WorkforceSize` -> `StaffCost`) |
| `src/utils/calculator.js` | Pure calculation logic |
| `src/i18n/` | Translation files + `translations.js` aggregator |
| `src/Layout.jsx` | Shell layout with nav |
| `src/components/ProtectedRoute.jsx` | Route guard |

## Claude Compatibility Contract
Codex must treat the `.claude/` directory as the source of project orchestration truth.

### Required Reads
- Project memory: `.claude/CLAUDE.md`
- Task registry: `.claude/tasks.md`
- Commands: `.claude/commands/*.md`
- Agents: `.claude/agents/*.md`
- Skills: `.claude/skills/*.md`
- Compatibility docs: `.claude/compatibility/*.md`
- Machine cache: `.claude/compatibility/cache.json`

### Command Resolution
When the user invokes a command such as `/plan`, `/run`, `/review`, `/status`, `/compress`, `/init`, or `/sync`:
1. Read the matching `.claude/commands/<name>.md` file.
2. Execute the described workflow as closely as Codex can.
3. Use `.claude/tasks.md` for task lookup and status context.
4. Report any behavior that cannot be reproduced exactly.

### Agent Resolution
When the user references a Claude agent:
1. Read `.claude/agents/<agent>.md`.
2. Adopt that role's scope, constraints, and output contract.
3. If the agent delegates to another agent, simulate the handoff in-process and state the role being applied.
4. Use `claude-bridge` for command discovery, context synchronization, and compatibility explanation.

### Skill Resolution
When the user references a Claude skill or a task matches a skill:
1. Read `.claude/skills/<skill>.md`.
2. Apply its patterns and constraints to the current implementation.
3. Prefer project-local patterns over new abstractions.

## Orchestration Rules
1. Use Plan -> Review -> Execute -> Validate for non-trivial work.
2. For simple single-file fixes, Codex may execute directly while still honoring relevant Claude rules.
3. Treat model routing in Claude files as intent metadata: Opus = architecture decisions, Sonnet = planning/medium complexity, Haiku = simple/mechanical fixes. Codex performs the nearest equivalent reasoning in-process.
4. Keep outputs concise and summarize reasoning.
5. Create context snapshots with `/compress` when a session grows large.
6. All Claude-defined agents, commands, and skills live under `.claude/`.

## Agent Registry
| Agent | File | Role |
|-------|------|------|
| claude-bridge | `.claude/agents/claude-bridge.md` | Synchronizes Claude context and maps Claude workflows to Codex behavior |
| Planner | `.claude/agents/planner.md` | Breaks work into tasks |
| Reviewer | `.claude/agents/reviewer.md` | Approves/rejects plans and outputs |
| UI Agent | `.claude/agents/ui-agent.md` | React component, JSX, layout, and routing work |
| State Agent | `.claude/agents/state-agent.md` | State/data flow logic |
| Refactor Agent | `.claude/agents/refactor-agent.md` | Code cleanup without behavior changes |
| Performance Agent | `.claude/agents/performance-agent.md` | Bundle/render optimization |
| i18n Agent | `.claude/agents/i18n-agent.md` | Translation and RTL tasks |
| Test Agent | `.claude/agents/test-agent.md` | Unit/integration tests |

## Command Interface
| Command | File | Description |
|---------|------|-------------|
| `/sync` | `.claude/commands/sync.md` | Reload Claude files, rebuild inventory/cache, report missing or broken references |
| `/init` | `.claude/commands/init.md` | Bootstrap orchestration system |
| `/plan` | `.claude/commands/plan.md` | Create structured plan for a task |
| `/run` | `.claude/commands/run.md` | Execute a specific task by ID |
| `/review` | `.claude/commands/review.md` | Review a plan or output |
| `/compress` | `.claude/commands/compress.md` | Compress context into snapshot |
| `/status` | `.claude/commands/status.md` | Show all task statuses |

## Coding Standards and Project Conventions
- Preserve HashRouter behavior for static hosting compatibility.
- Use plain JSX/JS, not TypeScript.
- Keep state local with React hooks; do not add a state management library without explicit approval.
- Maintain i18n through the simple `T[lang]` object map and locale files in `src/i18n/`.
- Keep `calculator.js` pure and side-effect free.
- Use CSS Modules for component layout where local styling is needed.
- Preserve existing step component prop contracts unless Reviewer approval is part of the workflow.

## Known Compatibility Differences
- Claude model names and multi-agent execution are represented as Codex role simulation in a single agent session.
- Claude command files are markdown workflow specs, not executable shell commands.
- Paths in older Claude memory mention `agents/`, `commands/`, and `skills/`; the actual repository paths are `.claude/agents/`, `.claude/commands/`, and `.claude/skills/`.
- No project-level `hooks/` or `workflows/` directories were found during synchronization.

## Compatibility Artifacts
- Inventory: `.claude/compatibility/inventory.md`
- Migration notes: `.claude/compatibility/migration-notes.md`
- Compatibility report: `.claude/compatibility/report.md`
- Cache: `.claude/compatibility/cache.json`
