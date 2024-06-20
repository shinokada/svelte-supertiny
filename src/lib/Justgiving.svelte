<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="JustGiving"
{role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path d="m0 0H512V512H0" {fill}/><path d="m443 216h-132l-77 76h106c-14 30-45 51-81 51-49 0-89-38-89-87 0-49 40-88 89-88 17 0 34 5 48 14l71-71c-33-27-74-43-119-43-104 0-189 84-189 188 0 103 85 187 189 187 104 0 187-84 187-187 0-14 0-28-3-40z" fill="#7A04DD"/></svg>
