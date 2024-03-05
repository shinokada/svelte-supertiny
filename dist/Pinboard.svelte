<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Pinboard,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Pinboard"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#182ef5" /><path
		fill="#fff"
		d="M182 56L56 185l57-3 102 126-12 68 75-77L456 456 300 281l78-83L303 216 182 105"
	/></svg
>
