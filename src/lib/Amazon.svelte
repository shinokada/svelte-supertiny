<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'amazon',
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
  <path d="m0 0H512V512H0" fill="#f90" /><path
    fill="#fff"
    d="M283 187c-62 2-121 19-121 81 0 43 26 64 61 64 31 0 51-12 68-30 8 11 10 16 24 27q5 3 10-1l31-27q4-4 0-10c-7-11-15-19-15-39v-64c0-27 2-52-18-70-17-16-38-20-62-21-53-1-88 28-93 62q-1 8 7 9l37 5c6 1 9-4 10-8 6-22 29-28 43-23 20 6 18 29 18 45m-36 105c-15 0-25-13-25-30 1-36 29-42 61-42v18c0 32-17 54-36 54m168 106c13-11 26-38 25-57 0-7-1-8-8-10-13-4-46-5-62 10-3 3-2 5 1 5 11-2 45-6 50 2 4 7-8 35-12 47-2 5 2 6 6 3M58 342c96 91 247 94 345 25 7-4 0-12-6-9A376 376 0 0162 337c-4-3-8 2-4 5"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'amazon'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
