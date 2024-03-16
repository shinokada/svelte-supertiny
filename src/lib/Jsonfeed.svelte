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
    ariaLabel = 'Jsonfeed',
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
  aria-label="JSON Feed"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#8be028" /><g {fill}
    ><ellipse cx="386.53" cy="125.5" rx="27.5" ry="27.5" /><ellipse
      cx="326.53"
      cy="185.5"
      rx="27.5"
      ry="27.5"
    /><ellipse cx="266.53" cy="245.5" rx="27.5" ry="27.5" /></g
  ><path
    d="m118 96s-53.5 42-52.5 87c0.6 25.2 22.5 45 39.5 64s41 32 46 59c3 16-10 22-19 35-10.7 15.4 7 32 7 32s16.6 17.7 32 7c13-9 19-22 35-19 27 5 40 29 59 46s38.8 38.9 64 39.5c45 1 87-52.5 87-52.5l-29-29s-23 27-43 27c-45.5-8.6-61.1-59.5-100-77-29-12-45.7 12.6-53 6-6.6-7.3 18-24 6-53-17.5-38.9-68.4-54.5-77-100 0-20 27-43 27-43z"
    fill="#497715"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Jsonfeed';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
