<script>import { getContext } from "svelte"; const ctx = getContext("iconCtx") ?? {}; export let size = ctx.size || "24"; export let role = ctx.role || "img"; </script><svg xmlns="http://www.w3.org/2000/svg"
aria-label="Ghost" {role}
 width="{size}" height="{size}" {...$$restProps} on:click on:keydown on:keyup on:focus on:blur on:mouseenter on:mouseleave on:mouseover on:mouseout viewBox="0 0 512 512"><path
d="m0 0H512V512H0"
fill="#e8e9eb"/><path stroke="#3d515b" stroke-width="61" d="M101 134h187zm246 0h61zM101 257h310zm0 121h123zm187 0h123z"/></svg>