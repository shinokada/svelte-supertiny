---
"svelte-supertiny": patch
---

fix: if there is fill="#fff", add fill?: string; to CtxType and interface Props, fill = ctx.fill || '#fff', to props(), and replace fill="#fff" with {fill}
