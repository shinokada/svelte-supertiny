<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Unicode" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
fill="#55f"/><path {fill} d="m273 195v96c0 63-35 100-98 100S73 358 74 291V140q0-4 3-4h40q3 0 3 4v150q1 60 53.5 60t53.5-60V139q0-3 3-3h53q4 0 5 3l100.5 187-1.5-124q0-3 3-3h38q3 0 3 3v181q0 4-4 4h-48q-4 0-5-2m33-264a28 28 0 101 0"/></svg>