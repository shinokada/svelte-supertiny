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
		ariaLabel = 'Google_assistant,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="Google Assistant"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#fff" /><circle
		cx="190.8"
		cy="198.2"
		fill="#4285f4"
		r="102.2"
	/><circle cx="402.7" cy="208.2" r="20.8" fill="#34a853" /><circle
		cx="344.5"
		cy="259.5"
		r="42"
		fill="#ea4335"
	/><circle cx="344.4" cy="366.1" r="49.9" fill="#fbbc05" /></svg
>
