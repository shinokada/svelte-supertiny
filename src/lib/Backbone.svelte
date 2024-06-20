<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Backbone" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512" fill="#0071b5"><path
d="m0 0H512V512H0"
{fill}/><path d="m256 161v51l94-54v85l-94 53v55l141-80V81"/><path fill="#002a41" d="m115 81V271l282 160V241m-235 1V158l90 51v5l98 55v81"/><path d="m115 431V241l141-80v55l-94 53v81l94-54v55"/></svg>