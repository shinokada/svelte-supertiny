<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Julia,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Julia"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><circle fill="#389826" cx="256" cy="137" r="83" /><circle
		fill="#cb3c33"
		cx="145"
		cy="329"
		r="83"
	/><circle fill="#9558b2" cx="367" cy="329" r="83" /></svg
>
