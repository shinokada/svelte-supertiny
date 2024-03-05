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
		ariaLabel = 'Gatehub,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	xmlns:xlink="http://www.w3.org/1999/xlink"
	aria-label="GateHub"
	{role}
	viewBox="0 0 512 512"
	fill="#232323"
	><path d="m0 0H512V512H0" /><g id="g"
		><circle cx="83" cy="256" r="36" stroke="#f7f6f2" stroke-width="15" fill="none" /><rect
			x="169"
			y="250"
			width="88"
			height="13"
			fill="#9d9fa7"
		/></g
	><use xlink:href="#g" transform="rotate(120 256 256)" /><use
		xlink:href="#g"
		transform="rotate(240 256 256)"
	/></svg
>
