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
		ariaLabel = 'Lastpass,',
		class: classname,
		...restProps
	} = $props<Props>();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	{...restProps}
	aria-label="LastPass"
	{role}
	viewBox="0 0 512 512"
	><path d="m0 0H512V512H0" fill="#d32d27" /><g stroke-linecap="round" stroke="#fff"
		><path d="M108 256zm119 0zm120 0z" stroke-width="88" /><path
			d="M438 170 v172"
			stroke-width="20"
		/></g
	></svg
>
