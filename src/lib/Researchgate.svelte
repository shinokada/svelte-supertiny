<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'researchgate',
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
  <path d="m0 0H512V512H0" fill="#00d0af" /><g fill="#feffff"
    ><path
      d="M213 273c-7 3-10 4-24 4-9 1-17 0-18 0-2 0-2-4-2-40V198l10-1c23-2 39 2 48 12 8 8 11 17 10 30-1 17-9 28-23 35Zm54 109c7 2 21 2 26 0 1 0 2-2 2-5s0-4-3-4c-1 0-6-1-10-3-9-5-21-16-36-37-11-15-28-41-28-43 0 0 3-2 7-3 20-8 36-29 37-50 2-19-5-33-20-43-16-11-26-12-81-11l-43 1v4c0 4 1 4 5 5 11 1 15 3 18 8 2 5 3 7 3 77 0 48 0 75-1 79-1 9-5 12-15 14-8 2-9 2-9 6v4h80v-4-4l-10-1c-19-3-18-2-19-45V293h24l6 11c9 14 26 41 35 53 13 16 21 22 36 26Z"
    /><path
      d="M321 227c19 2 36-7 42-22 2-6 3-10 3-22V168H330v13h10 10v7c0 14-7 23-20 24-9 1-17-3-21-10-3-4-3-7-3-29 0-23 0-24 3-29 5-9 15-14 25-11 5 2 9 5 14 11l3 3 6-3c3-2 6-3 6-4 0-3-4-9-9-13-8-6-16-9-29-8-12 1-18 3-25 10-8 8-10 17-11 38-2 41 7 57 32 61Z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'researchgate'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
