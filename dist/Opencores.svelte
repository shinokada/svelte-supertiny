<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Opencores,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="OpenCores"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#27529d" /><path
		fill="none"
		stroke="#fff"
		stroke-width="48"
		d="M276 192a84 84 0 01-168 0 84 84 0 01168 0zM379 380A84 84 0 11380 261"
	/></svg
>
