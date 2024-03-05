<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Pocketcasts,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Pocket Casts"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#f43e37" /><path
		fill="#fff"
		d="m256 329a73 73 0 1173-73h42A115 115 0 10256 371v29A144 144 0 11400 256h48A192 192 0 10256 448"
	/></svg
>
