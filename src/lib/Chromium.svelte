<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Chromium" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
{fill}/><circle cx="256" cy="256" r="192" fill="#afcbfa"/><path d="m94 153a192 192 90 00162 295l82-142" fill="#669df6"/><path d="m89.72 160a192 192 90 01332.56 0H256l-82 146" fill="#1967d2"/><circle cx="256" cy="256" r="86" fill="#1a73e8" stroke="#fff" stroke-width="20"/></svg>