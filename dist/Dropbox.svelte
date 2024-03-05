<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Dropbox,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Dropbox"
	{role}
	viewBox="0 0 512 512"
	fill="#0061ff"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		d="M158 101l-99 63 295 188 99-63m-99-188l99 63-295 188-99-63m99 83l98 63 98-63-98-62z"
	/></svg
>
