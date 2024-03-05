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
		ariaLabel = 'Preact,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Preact"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		d="m84 157V355l172 99 172-99V157L256 58m1 172a26 26 0 11-2 0"
		fill="#673ab8"
	/><path
		d="m217 299a58 151.5-52.5 10-5-4zm78 0a58 151.5 52.5 115-4z"
		fill="none"
		stroke="#fff"
		stroke-width="12"
	/></svg
>
