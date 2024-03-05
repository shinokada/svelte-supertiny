<script>
	import { getContext } from 'svelte';
	const ctx = getContext('iconCtx') ?? {};
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Google_drive_old,',
		class: classname,
		...restProps
	} = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Google Drive"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path fill="#4587f4" d="M468 299H112v120h288" /><path
		fill="#1da261"
		d="M187 51L44 299l68 120L325 51"
	/><path fill="#ffcf48" d="M325 51l143 248H331L187 51" /></svg
>
