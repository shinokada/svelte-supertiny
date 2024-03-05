<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Opensource,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Open Source"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		fill="#3da639"
		stroke="#1d531d"
		stroke-width="13"
		stroke-linejoin="round"
		d="m322 435a185 185 0 10-132 0l43-111a64 64 0 1146 0z"
	/></svg
>
