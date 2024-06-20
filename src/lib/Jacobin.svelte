<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Jacobin" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
{fill}/><path fill="none" stroke="#000" stroke-width="34" d="m166 326a84 84 0 10170 0V124H158"/></svg>