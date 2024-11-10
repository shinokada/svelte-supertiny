<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'vegetarian',
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
  <path d="m0 0H512V512H0" fill="none" /><circle cx="256" cy="256" r="256" fill="#017f00" /><circle
    cx="256"
    cy="256"
    r="240"
    fill="#fff200"
  /><path
    fill="#017f00"
    d="m407 106-35 8c-30 6-35 8-48 18a86 86 0 00-32 65c0 10 2 16 3 15l3-6c6-14 22-35 36-46 7-6 22-11 22-8l-11 13c-6 6-7 8-18 23-10 16-24 44-34 69a1054 1054 0 00-35 102c-2 1-6-13-14-45-14-52-19-70-33-102a220 220 0 00-91-99c-7-3-8-2-2 5 27 30 42 53 59 85 14 27 24 54 41 117a1514 1514 0 0126 109l3 3h22c5-2 5-6 12-49a506 506 0 0151-157l13-4c24-4 44-14 57-31 10-12 12-20 14-48 2-14 2-19 5-27l3-12c-1-2-2-1-17 2z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'vegetarian'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
