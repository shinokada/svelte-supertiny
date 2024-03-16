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
    ariaLabel = 'Hackerone',
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
  aria-label="HackerOne"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M174 56c-10 1-23 5-25 16v367c2 9 11 15 20 16h14c9-2 20-7 21-17a116708 116708 0 0 0 0-366c-3-11-15-15-25-16h-5zM333 200c-7 1-13 2-17 5l-74 47c-4 3-5 8-5 12 2 12 8 21 17 27 7 4 18 7 25 2l29-19v165c3 10 12 15 21 17h10c9-2 19-5 23-14l1-3a18494 18494 0 0 0 0-222c-1-12-16-16-26-17h-4z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Hackerone';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
