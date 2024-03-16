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
    ariaLabel = 'Sentry',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="Sentry"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    stroke="#221f20"
    stroke-width="26"
    fill="none"
    d="m360 391 33 0a17.5 17.5 0 0016-24L271 128a17.5 17.5 0 00-30 0l-38 66a230 230 0 01114 197h-57a166 166 0 00-86-148l-28 49a114 114 0 0158 99h-85a17.5 17.5 0 01-14-27l19-33"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Sentry';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
