<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M167 173l61-35-2-11c0-15 11-27 25-29V45h10V98c14 3 25 15 25 29l-2 11 61 35 8-7c13-7 29-4 38 7l46-26 5 9-46 26c5 13 0 29-13 36l-9 3v70l9 3c13 7 18 23 13 36l46 26-5 9-46-26c-9 11-25 14-38 7l-8-7-61 35 2 11c0 15-11 27-25 29v53H251V414c-14-3-25-15-25-29l2-11-61-35-8 7c-13 7-29 4-38-7l-46 26-5-9 46-26c-5-13 0-29 13-36l9-3V221l-9-3c-13-7-18-23-13-36L70 156l5-9 46 26c9-11 25-14 38-7l8 7ZM339 331c-3-8-2-17 2-25 5-8 13-13 22-15V221c-9-1-17-6-22-15-5-8-5-17-2-25l-61-35c-6 6-14 10-23 10s-17-4-23-10l-61 35c3 8 2 17-2 25-5 8-13 13-22 15v70c9 1 17 6 22 15 5 8 5 17 2 25l61 35c6-6 14-10 23-10s17 4 23 10Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
