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
		ariaLabel = 'Codepen,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="CodePen"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" /><path
		fill="none"
		stroke="#fff"
		stroke-width="33"
		stroke-linejoin="round"
		d="M256 314 431 198 256 81 81 198ZV431L431 314 256 198 81 314 256 431M81 198V314m350 0V198m-175 0V81"
	/></svg
>
