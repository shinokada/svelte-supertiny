<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Plex,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Plex"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#282a2d" /><path
		d="m256 70h-108l108 186-108 186h108l108-186z"
		fill="#e5a00d"
	/></svg
>
