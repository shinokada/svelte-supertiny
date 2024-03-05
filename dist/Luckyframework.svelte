<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Luckyframework,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Lucky Framework"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><radialGradient id="a" cx="7.25" cy="4" r="7.73"
		><stop offset=".975" stop-color="#9cfd65" /><stop offset=".975" stop-color="#34db96" /><stop
			offset="1"
			stop-color="#34db96"
		/><stop offset="1" stop-color="#1b92b1" /></radialGradient
	><path
		stroke="url(#a)"
		stroke-linejoin="round"
		stroke-width="150"
		d="M146.1 351.1H366L256 161z"
	/></svg
>
