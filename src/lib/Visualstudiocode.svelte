<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'visualstudiocode',
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
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><filter id="a"
    ><feFlood flood-opacity="0" result="b" /><feColorMatrix
      in="SourceAlpha"
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
    /><feGaussianBlur stdDeviation="4" /><feColorMatrix
      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0"
    /><feBlend in2="b" result="c" /><feBlend in="SourceGraphic" in2="c" /></filter
  ><path
    fill="#27b"
    d="m423 114-75-37a23 23 0 00-26 5L77 306a15 15 0 000 22l20 18a15 15 0 0020 1l295-224c10-7 24-1 24 12v-1c0-9-5-17-13-20"
  /><path
    fill="#08c"
    d="m423 399-75 36a23 23 0 01-26-5L77 207a15 15 0 010-22l20-19a15 15 0 0120-1l295 224c10 8 24 1 24-12v1c0 9-5 17-13 21"
    filter="url(#a)"
  /><path
    fill="#19f"
    d="M348 435a23 23 0 01-26-5c9 9 23 3 23-9V92c0-12-14-19-23-10a23 23 0 0127-4l75 36c7 3 12 11 12 20v244c0 9-5 17-12 21"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'visualstudiocode'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
