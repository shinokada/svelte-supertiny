<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'jquery',
    class: classname,
    title,
    desc,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label={ariaLabel}
  {role}
  viewBox="0 0 512 512"
  fill="#2e64b3"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#2f2d2e"
    d="m125.3 300.5c20 3 27 1.7 33-22l8.8-41.3h-16.5l-8.7 39q-2.5 10.5-8 9.7l-5-.9m22.6-51.7h16.4l3-13.4h-16.3m63.8 42.3h-18q-13.5-2-8.7-23t21-20.4 12.6 19m17.3 25.1h-8.7c4-10 9.5-24 9.4-32s-3-26.5-29-27.3-38 20-41 40 4 34.2 27 33.8h38.5m55.4 0h-28q-21.1 1-16-27l5.7-30.5h15.5l-6.7 33q-2.2 10.2 7 9.8h10.2l9.4-42.8h15.1m40.7 24.6q1.5-10.8-9-10.8t-13 7.3q-1 3 .7 3.4m28 33h-26c-27 0-23-17-20-31s11.3-27 33-26.6 23.7 15.1 19 35h-36q-2.7 1-1.6 5.7t10 5h24.7m6.6 11.9h15.6l8.9-43.7h32.7l-1.6-7q-1.4-7-11-6.8h-32.5m28.3 17.3h17.6l2.3 10 25-37h20l-40 53.3-3.7 14h-17.5l3.7-14"
  /><path
    d="m50 218c-18 18-10 44 9 57s46 10 58-13c-31 31-83-8-67-44m21-8c-16 17-5 36 6 43s33 9 42-11c-22 25-63-6-48-32m16-3c-17 19 18 43 30 20-12 14-38-3-30-20"
  /><text style="font:italic 600 27px Arial" transform="matrix(.92 0 0 1 198 308)"
    >write less, do more.</text
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'jquery'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
