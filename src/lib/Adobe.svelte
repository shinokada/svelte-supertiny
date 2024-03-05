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
		ariaLabel = 'Adobe,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Adobe"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#ed2224" /><path
		fill="#fff"
		d="M296 120h114v272zm-80 0H102v272zm39 99-48 118h52l23 55h46"
	/></svg
>
