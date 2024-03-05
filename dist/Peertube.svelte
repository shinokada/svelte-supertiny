<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Peertube,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="PeerTube"
	{role}
	viewBox="0 0 512 512"
>
	<path d="M0 0h512v512H0" fill="#fff" /><path fill="#211f20" d="M140 100v156l116-78" /><path
		fill="#737373"
		d="M140 256v156l116-78"
	/><path fill="#f1680d" d="M256 178v156l116-78" /></svg
>
