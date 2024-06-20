<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Gojek" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
{fill}/><path fill="#0a1" d="m255 330a72 72 0 112 0m-73 106a36 36 0 0024-68 120 120 0 1196 0 36 36 0 0024 68 192 192 0 10-144 0"/></svg>