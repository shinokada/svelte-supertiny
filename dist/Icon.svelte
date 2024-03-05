<script>
	let {
		icon,
		size = 24,
		color,
		role = 'img',
		ariaLabel = 'Icon',
		class: classname,
		...restProps
	} = $props();
</script>

<svelte:component
	this={icon}
	{...restProps}
	{role}
	{size}
	{color}
	class={classname}
	aria-label={ariaLabel}
/>
