<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'drupal',
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
  fill="#fff"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" /><path fill="#00598e" d="M383 152A175 175 0 11102 355" /><path
    fill="#0073ba"
    d="M243 97V48c26 31 40 47 84 65 21 9 40 21 56 38 19 25 27 97-91 166s-155 72-190 38c-44-79-8-159 9-181"
  /><path fill="#93c5e4" d="M243 86V50s18 36-6 52c31 31-186 161-115 59" /><path
    d="M221 104c42 7-104 105-105 75 0-15 23-38 40-50s87-29 86-79c0 0 24 38-21 54m1 171c-70 0-100 106-10 106 36 0 86-47 110-47s45 45 62 45c32 0 58-97 12-97-19 0-59 40-75 38-29-4-56-45-99-45m20 142c25 19 79 14 103-4 6-5 3-14-3-9-17 14-74 18-92 2-5-5-19 3-8 11m42-32c6-5 11-13 26-13s20 11 23 14 9-2 6-8-6-17-28-17-30 14-34 17-2 14 7 7"
  /><path
    stroke="#004975"
    fill="none"
    stroke-width="4"
    d="M186 113a175 175 0 10141 0c-44-18-58-34-84-65-4 41-26 50-57 65"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'drupal'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
