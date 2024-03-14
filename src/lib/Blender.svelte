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
    ariaLabel = 'Blender,',
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
  aria-label="Blender"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path fill="#265787" d="m310 215a52 48 0 11-1 0" /><path
    fill="#ea7600"
    d="m175 273a134 123-5 10220-92L274 88q-14-10-30 0-14 11-2 23l50 41H138q-23 2-27 19c-3 11 7 20 19 20h78L75 293q-29 21-16 42 16 19 44-3zm133-83a82 75 2 11-1 0z"
  /></svg
>
