<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Delicious,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Delicious"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#333" /><path fill="#39F" d="M512 512V0H0" /><path
		fill="#fff"
		d="M0 0h256v256H0"
	/><path fill="#eee" d="M256 256h256v256H256z" /></svg
>
