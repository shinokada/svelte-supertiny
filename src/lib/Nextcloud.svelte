<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; </script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="NextCloud" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512" fill="#0082c9"><path
d="m0 0H512V512H0"/><path stroke="#fff" stroke-width="33" d="m160 257a40 40 0 110-2zh25a71 71 0 100-2v2m167 0a40 40 0 100-2z"/></svg>