<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'wikipedia',
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
    d="M151 152l1 1v7c0 2 0 3-3 3-16 1-26 0-18 17l76 167 3 1 37-75-40-84c-11-23-11-24-23-26-3 0-5 0-5-2v-8l1-1h69l1 1v7c0 3-5 3-8 4-13 1-11 6-2 22l25 52 27-56c6-11 8-18-10-19-3 0-7 0-7-3v-7l1-1h64l1 1v7c0 2-2 3-4 3-15 0-17 9-25 24l-37 72 43 88 3 1 70-166c8-17-11-19-21-19-2 0-4-1-4-3v-7l1-1h80v8c0 2 0 3-2 3-17 0-28 7-36 24L323 381c-8 16-16 15-24 0l-42-88-45 88c-9 17-18 15-25 1L97 186c-8-18-8-22-28-23-3 0-4-1-4-3v-8Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'wikipedia'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
