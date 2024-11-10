<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'cloudflare',
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
    fill="#f38020"
    d="M331 326c0 2-2 3-3 3H54c-2 0-3-1-3-2-5-26 12-69 60-72-9-37 31-71 69-46a97 97 0 01187 11c1 3-9 24-9 24-6 18-26 32-43 33l-150 2c-5 1-5 7-1 7l148 2c15 0 30 12 19 38Z"
  /><path
    fill="#faae40"
    d="M381 224a81 81 0 0178 103l-3 2H343c-2 0-2-1-2-3 0 0 10-35 46-39l33-1c5-1 5-7 1-7l-32-2c-17-1-25-15-20-31l5-21c1-2 3-1 7-1"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'cloudflare'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
