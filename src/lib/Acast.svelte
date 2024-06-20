<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Acast" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
{fill}/><path d="m446.5 232A192 192 0 10295 444m-11-101c-12 19-40 33-68 33-48 0-79-23-79-58 0-64 106-68 145-68v-42c0-8 0-24-19-24-17 0-18 11-18 14l2 14c0 14-18 24-45 24-29 0-47-15-47-39 0-30 39-59 109-59 76 0 113 37 113 71m-96 65c-30 0-45 15-45 33 0 13 8 20 21 20s23-10 23-22"/></svg>