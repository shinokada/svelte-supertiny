<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Crystal,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Crystal"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		d="m46 200 56 210 210 56 154-154-56-210-210-56zm11 3 205-55-55 205z"
	/></svg
>
