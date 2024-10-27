<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'hulu',
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
  <path d="m0 0H512V512H0" fill="#040405" /><path
    fill="#1ce783"
    d="M133 234c18 0 32 8 32 30v51H137V267c0-4-4-7-8-7H112c-4 0-8 3-8 7v48H76V197h28v38l10-1h19m275 0h28v50c0 18-11 31-28 31H380c-20 0-33-10-33-31V234h29v48c0 4 3 7 7 7h17c4 0 8-3 8-7V234ZM246 282V234h29v50c0 18-11 31-29 31H218c-19 0-33-10-33-31V234h29v48c0 4 4 7 8 7h16c5 0 8-3 8-7Zm51 34h29V197H297Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'hulu'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
