<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'slideshare',
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
  <path d="m0 0H512V512H0" fill="#17B" /><path
    fill="#fff"
    d="M138 86c-25 0-44 20-44 43v127c-8-4-14-6-15-3-3 7 3 13 15 27 12 15 63 34 63 34v59c0 17 37 43 56 43s33-13 33-21v-55l12 4v51c0 8 12 31 51 31s49-45 49-53v-54c29-15 57-23 70-47 12-24 2-28-9-17V129c0-23-20-43-45-43zm0 21h236c13 0 23 10 23 22v140c-19 9-45 17-49 17h-56c-17 0-34-1-34 17-14-9-14-16-37-15-16 0-56-3-78-8-8-2-18-7-28-13V129c0-12 10-22 23-22zm68 85c-21 0-39 17-39 38s18 38 39 38c22 0 39-17 39-38s-17-38-39-38zm104 0c-21 0-39 17-39 38s18 38 39 38c22 0 39-17 39-38s-17-38-39-38z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'slideshare'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
