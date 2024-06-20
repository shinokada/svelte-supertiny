<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Slack" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"
stroke-width="78" stroke-linecap="round"><path
d="m0 0H512V512H0"
{fill}/><path stroke="#36c5f0" d="m110 207h97m0-97h.1v-.1"/><path stroke="#2eb67d" d="m305 110v97m97 0v.1h.1"/><path stroke="#ecb22e" d="m402 305h-97m0 97h-.1v.1"/><path stroke="#e01e5a" d="M110 305h.1v.1m97 0v97"/></svg>