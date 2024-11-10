<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'yammer',
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
  <path d="m0 0H512V512H0" fill="none" /><path
    d="m326 260c1 9 60 16 100 14 19-1 18-31-1-32-19-2-100 9-99 18zm-25-45c5 8 61-15 95-36 16-10 1-36-17-28-17 8-83 57-78 64zm1 86c-4 7 43 45 77 65 17 9 33-17 17-28s-90-45-94-37z"
    fill="#265495"
  /><path
    d="m278 134-74 185-73-185m73 185-11 29s-14 38-58 30"
    fill="none"
    stroke="#265495"
    stroke-width="34"
    stroke-linecap="round"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'yammer'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
