<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'messenger',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient
    id="a"
    x1="256"
    x2="256"
    y1="78.2"
    y2="441.2"
    gradientUnits="userSpaceOnUse"
    ><stop offset="0" stop-color="#00B2FF" /><stop
      offset="1"
      stop-color="#006AFF"
    /></linearGradient
  ><path
    fill="url(#a)"
    d="M193.6 424.6a14.5 14.5 0 019.8-.7A176.4 176.4 0 10131.2 385a14.7 14.7 0 015 10.4l1 32.3a14.6 14.6 0 0020.4 12.9z"
  /><path
    fill="#fff"
    d="M282.2 246a11 11 0 0013 0l57.5-43.6a8.6 8.6 0 0112.5 11.5l-53.4 84.7a27.3 27.3 0 01-39.4 7.3L229.9 274a11 11 0 00-13.2 0l-57.4 43.6a8.6 8.6 0 01-12.5-11.5l53.4-84.7a27.3 27.3 0 0139.5-7.3z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'messenger'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
