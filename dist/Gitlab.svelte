<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Gitlab,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="GitLab"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		fill="#e24329"
		d="m71 222 52-136c5-12 21-12 26 0l35.5 109h143L363 86c5-12 21-12 26 0l52 136-185 120"
	/><path fill="#fca326" d="m244 442q12 10 24 0l61-46V340.8H183V396" /><path
		fill="#fc6d26"
		d="m103 336A97 97 0 0171 222q37 8 65 28l193 146 80-60a97 97 0 0032-114q-37 8-65 28L183 396"
	/></svg
>
