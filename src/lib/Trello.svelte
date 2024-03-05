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
		ariaLabel = 'Trello,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Trello"
	{role}
	viewBox="0 0 512 512"
	fill="#fff"
	><path d="m0 0H512V512H0" fill="#0079bf" /><rect
		height="188"
		rx="23"
		width="132"
		x="284"
		y="95"
	/><rect height="296" rx="23" width="132" x="97" y="95" /></svg
>
