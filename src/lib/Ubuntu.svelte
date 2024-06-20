<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; export let fill = ctx.fill || "#fff";</script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Ubuntu" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
fill="#e65e17"/><circle cx="265" cy="256" r="124" fill="none" stroke="#fff" stroke-width="51"/><g {fill} stroke="#e65e17" stroke-width="10"><circle cx="90" cy="257" r="41"/><circle cx="353" cy="409" r="41"/><circle cx="353" cy="104" r="41"/><path stroke-width="19" d="M185,118l82,138m0,0h155h-155l-84,140"/></g></svg>