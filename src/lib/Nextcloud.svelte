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
    ariaLabel = 'Nextcloud,',
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
  aria-label="NextCloud"
  {role}
  viewBox="0 0 512 512"
  fill="#0082c9"
  ><path d="m0 0H512V512H0" /><path
    stroke="#fff"
    stroke-width="33"
    d="m160 257a40 40 0 110-2zh25a71 71 0 100-2v2m167 0a40 40 0 100-2z"
  /></svg
>
