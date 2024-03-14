<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    fill?: string;
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
    fill?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Linux_mint,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="Linux Mint"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#69b53f" /><path
    {fill}
    d="M102 113v198a88 88 0 0088 88h132a88 88 0 0088-88V201a66 66 0 00-110-48.694 66 66 0 00-110 48.694v110h44V201a1 1 0 0144 0v110h44V201a1 1 0 0144 0v110a44 44 0 01-44 44H190a44 44 0 01-44-44V113z"
  /></svg
>
