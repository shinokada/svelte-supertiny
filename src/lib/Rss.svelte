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
    ariaLabel = 'Rss,',
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
  aria-label="RSS"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#f80" /><path
    {fill}
    d="m109 271A132 133 0 01241 403h60A192 193 0 00109 211v-54A246 247 0 01355 403h60A306 307 0 00109 97m35 235a35 35 0 102 0"
  /></svg
>
