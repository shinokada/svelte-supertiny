<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Citrix_compact,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Citrix"
	{role}
	viewBox="0 0 512 512"
	><rect height="512" width="512" fill="#fff" />
	<path
		d="M346.2 340.2a1 1 0 01-19 16.6l-69.8-80.3-69.8 80.3a1 1 0 01-19-16.6l72.1-82.9-72.1-82.9a1 1 0 0119-16.6l69.8 80.3 69.8-80.3a1 1 0 0119 16.6l-72.1 82.9zm-88.8-251a1 1 0 000 40.2 1 1 0 000-40.2z"
	/></svg
>
