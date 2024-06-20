<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Samsung Internet" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512" {fill}><path
d="m0 0H512V512H0"
fill="#7882ff"/><circle cx="256" cy="256" r="172"/><path d="m152 149a199 76 20.8 10255 98" stroke="#4d5cc1" stroke-width="54"/><path d="m98 188a172 172 0 01321 123"/></svg>