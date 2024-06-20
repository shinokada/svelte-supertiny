<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; </script><svg xmlns="http://www.w3.org/2000/svg"
{role} aria-label="Filestash"
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
fill="#7ec4e7"/><path d="m256 282a81 79 0 110-2za81 79 0 1181 78H175m0-158a81 79 0 11162 0" fill="none" stroke="#f2f3f5" stroke-width="35"/></svg>