<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'homekit',
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
    d="M256 223c4 0 7 2 11 5l10 9a16 16 0 016 11v26c0 7-6 13-13 13H242c-7 0-13-5-13-13V248a16 16 0 016-11l11-9c4-3 6-5 10-5m28 66V240l-28-21-28 21v49ZM242 159c8-6 20-6 28 0l58 46c9 7 9 15 9 20v97c0 12-8 20-19 20H194c-11 0-19-8-19-20V225c0-5 0-13 9-20l58-46Zm96 185V217c0-5-1-5-2-6l-80-63-80 63c-1 1-2 2-2 6V344ZM241 83c8-6 20-6 30 0l114 90c7 5 14 14 14 29V379c0 15-9 25-24 25H137c-15 0-24-10-24-25V202c0-15 7-24 14-29ZM399 406V218c0-6 5-11 11-11h21l-34-27a11 11 0 01-4-8V117H378v25c0 9-10 14-18 9L256 69 82 207h20c6 0 11 5 11 11V406Z"
    stroke="#000"
    stroke-width="22"
    stroke-linejoin="round"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'homekit'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
