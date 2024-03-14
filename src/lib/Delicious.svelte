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
    ariaLabel = 'Delicious,',
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
  aria-label="Delicious"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#333" /><path fill="#39F" d="M512 512V0H0" /><path
    {fill}
    d="M0 0h256v256H0"
  /><path fill="#eee" d="M256 256h256v256H256z" /></svg
>
