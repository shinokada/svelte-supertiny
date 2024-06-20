<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Trello" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"
{fill}><path
d="m0 0H512V512H0"
fill="#0079bf"/><rect height="188" rx="23" width="132" x="284" y="95"/><rect height="296" rx="23" width="132" x="97" y="95"/></svg>