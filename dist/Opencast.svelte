<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Opencast,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Opencast"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		d="m38 256 156-156v72l-84 84 84 84v72"
		fill="#24425d"
	/><path
		d="m474 256-156-156v72l84 84-84 84v72m32-156-156-156v72l84 84-84 84v72"
		fill="#4bb07b"
	/></svg
>
