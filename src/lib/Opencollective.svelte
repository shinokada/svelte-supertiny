<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Open Collective" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
{fill}/><path d="m316 148a123.5 123.5 0 100 216l49 50a192 192 0 110-316" fill="#7fadf2"/><path d="m364 196a124 124 0 010 120l50 49a192 192 0 000-218" fill="#b8d3f4"/></svg>