<script lang="ts">
	import { getContext } from 'svelte';
	interface CtxType {
		size?: string;
		role?: string;
	}
	const ctx: CtxType = getContext('iconCtx') ?? {};
	interface Props {
		size?: string;
		role?: string;
		ariaLabel?: string;
		class?: string;
	}
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Calendar,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Calendar"
	{role}
	viewBox="0 0 512 512"
	fill="#fff"
	font-family="monospace"
	><path d="m0 0V512h512V0" fill="#dee" /><path d="m0 0V180h512V0" fill="#d34" /><path
		fill="#eab"
		d="m383.5 86a14 14 0 101 0h42a14 14 0 101 0h42a14 14 0 101 0zm0 43a14 14 0 101 0h42a14 14 0 101 0h42a14 14 0 101 0"
	/><text x="24.5" y="164" style="text-transform:uppercase" font-size="140">FEB</text><g
		fill="#677"
		text-anchor="middle"
		><text font-size="256" x="256" y="400">29</text><text font-size="64" x="256" y="480"
			>Sunday</text
		></g
	><script>
<![CDATA[c=0;for(i in e={month:"short",day:"numeric",weekday:"long"})document.querySelectorAll("text")[c++].innerHTML=(new Date).toLocaleString(0,{[i]:e[i]})]]>
	</script></svg
>
