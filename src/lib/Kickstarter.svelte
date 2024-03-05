<script lang="ts">
	import { getContext } from 'svelte';
	interface CtxType {
		size?: string;
		role?: string;
	}
	const ctx: CtxType = getContext('iconCtx') ?? {};
	interface Props {
		size?: string;
		role?: string;
		ariaLabel?: string;
		class?: string;
	}
	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		ariaLabel = 'Kickstarter,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Kickstarter"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		d="m188 169v174l47-85 89-89-89 89 89 85"
		stroke="#034752"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="163"
	/></svg
>
