<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'meetup',
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
  <path d="m0 0H512V512H0" fill="#ed1c40" /><path
    d="M335 138c-12-1-11-23-43-21-26 2-36 30-50 26-14-5-34-20-47-20-46 1-58 40-70 70-6 16-35 106-40 129-14 60 66 77 85 37 15-32 45-118 53-134 4-9 11-25 25-23 27 4-18 85-29 120-8 27 29 43 49 11 8-12 46-86 52-98 5-11 20-50 34-45 22 8-13 57-23 78-25 41-38 96 14 118 12 6 74 20 77-7 4-26-24-22-42-26-40-8 3-90 13-109 7-15 53-96-4-113-33-9-48 8-54 7Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'meetup'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
