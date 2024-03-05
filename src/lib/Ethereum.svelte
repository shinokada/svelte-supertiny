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
		ariaLabel = 'Ethereum,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Ethereum"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path fill="#3C3C3B" d="m256 362v107l131-185" /><path
		fill="#343434"
		d="m256 41v296l131-78"
	/><path fill="#8C8C8C" d="m256 41v218h-132m0 25 132 78v107" /><path
		fill="#141414"
		d="m256 199v138l131-78"
	/><path fill="#393939" d="m124 259l132-60v138" /></svg
>
