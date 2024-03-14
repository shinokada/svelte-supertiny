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
    ariaLabel = 'Olympics,',
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
  aria-label="Olympic Rings"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><g stroke-width="11.4" stroke="#000" fill="none"
    ><circle cx="115.6" cy="226" r="59.1" stroke="#0081c8" /><circle
      cx="256"
      cy="226"
      r="59.1"
    /><circle cx="396.4" cy="226" r="59.1" stroke="#ee334e" /><circle
      cx="185.8"
      cy="286"
      r="59.1"
      stroke="#fcb131"
    /><circle cx="326.2" cy="286" r="59.1" stroke="#00a651" /><path
      d="m162.9 190.5a59.1 59.1 90 010 70.9"
      stroke="#0081c8"
    /><path d="m303.3 190.5a59.1 59.1 90 010 71M256 285.1a59.1 59.1 90 01-35.5-11.8" /><path
      d="m396.4 285.1a59.1 59.1 90 01-35.5-11.8"
      stroke="#ee334e"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Olympics,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
