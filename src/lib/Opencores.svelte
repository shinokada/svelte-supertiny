<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; </script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="OpenCores" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
fill="#27529d"/><path fill="none" stroke="#fff" stroke-width="48" d="M276 192a84 84 0 01-168 0 84 84 0 01168 0zM379 380A84 84 0 11380 261"/></svg>