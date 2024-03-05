<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Vivino,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Vivino"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#a91b2a" /><path
		stroke-linecap="round"
		stroke-width="70"
		stroke="#fff"
		d="m181 291zm41-70zm0 140zm40 70zm0-140zm0-140zm40-70zm0 140zm0 140zm41-70z"
	/></svg
>
