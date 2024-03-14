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
    ariaLabel = 'Element,',
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
  aria-label="Element"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><circle cx="256" cy="256" r="192" fill="#0dbd8b" /><path
    d="m153.2 277.1c0.5-46.4 37.8-81.6 81.6-81.6m0-42.3c46.4 0.5 81.6 37.8 81.6 81.6m42.3 0c-0.5 46.4-37.8 81.6-81.6 81.6m0 42.3c-46.4 0-81.6-37.8-81.6-81.6"
    fill="none"
    stroke="#fff"
    stroke-linecap="round"
    stroke-width="28.155"
  /></svg
>
