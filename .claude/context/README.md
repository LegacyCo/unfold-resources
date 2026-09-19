# .claude/context/

Shared context every agent loads. Three files, on purpose.

- `guardrails.md` — the rules no agent may break. Read first, always.
- `brand.md` — who KC is, how the writing sounds, what the offers are.
- `stack.md` — which tool does what, and the names the MCP servers go by.

Keep these short. They are prepended to every agent run, so every extra
paragraph is a tax on all seven agents at once. If a fact is only needed by
one agent, it belongs in that agent's file, not here.
