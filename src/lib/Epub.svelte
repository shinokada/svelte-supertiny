<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; </script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="ePub" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
fill="#FFF"/><path fill="#86b918" d="M256 377L135 256l121-121 40 41-80 80 40 40 121-120L272 70c-9-8-23-8-32 0L70 240c-8 9-8 23 0 32l170 170c9 8 23 8 32 0l170-170c8-9 8-23 0-32l-25-24z"/></svg>