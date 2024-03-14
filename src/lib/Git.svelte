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
    ariaLabel = 'Git,',
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
  aria-label="Git"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#f05133"
    d="m441 240L272 71a24 24 0 00-34 0l-35 35 44 44a29 29 0 0137 37l43 43a29 29 0 11-18 17l-40-40v104a29 29 0 11-24-1V205a29 29 0 01-15-38l-44-44L71 238a24 24 0 000 34l168 169a24 24 0 0033 0L441 272a25 25 0 000-32"
  /></svg
>
