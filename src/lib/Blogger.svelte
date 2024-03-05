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
		ariaLabel = 'Blogger,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Blogger"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#FF5722" /><path
		fill="#fff"
		d="M95 184c0-51 41-93 93-93h86c64 0 103 61 85 126 0 0 61-3 66 58v53c0 46-34 93-93 93H183c-49 0-88-39-88-88z"
	/><path stroke="#FF5722" stroke-width="55" d="M199 188h68m-74 129h133" /></svg
>
