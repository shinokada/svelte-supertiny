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
		ariaLabel = 'Workato,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Workato"
	{role}
	viewBox="0 0 512 512"
	fill="#fff"
	><path d="m0 0H512V512H0" fill="#fff" /><path
		fill="#27989F"
		d="M156 386c-32-77-61-167-86-259h64c11 51 30 130 49 186 15-49 35-124 48-186h50c13 62 32 137 49 186 18-56 37-135 48-186h64c-25 92-54 182-86 259h-49c-19-54-35-104-51-163-16 59-32 109-51 163z"
	/></svg
>
