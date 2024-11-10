<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'redhat',
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
    d="M379 255l3 20c5 89-241 29-237-46 0-5 1-9 3-14l7-17s170 44 220 39z"
  /><path
    fill="#e00"
    d="M317 277c24 0 58-5 58-33a27 27 0 000-7l-15-62c-3-13-6-20-30-32-18-9-59-25-70-25-12 0-15 15-28 15s-22-11-34-11-19 8-25 24l-18 52a12 12 0 00-1 4c0 17 70 75 163 75m62-22l3 20c0 26-30 41-69 41-90 0-168-52-168-87a35 35 0 013-14c-32 2-74 8-74 44 0 60 143 135 256 135 86 0 108-39 108-70 0-25-21-52-59-69"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'redhat'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
