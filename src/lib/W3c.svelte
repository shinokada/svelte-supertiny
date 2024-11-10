<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'w3c',
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
  <path d="m0 0H512V512H0" fill="#005a9c" /><path
    fill="#fff"
    d="M165 152l37 124 37-124h99v13l-38 64c16 4 40 20 40 62 0 78-83 88-103 24l20-8c19 40 55 28 55-16 0-13-2-41-36-41h-10v-11l36-61h-45l-52 179h-2l-39-126-37 126h-3L63 152h26l37 124 25-83-12-41m222 118c-31-63 23-165 67-89l15-30 4 26-16 29c-29-54-80-14-70 64m-16 25c31 60 74 50 99 3l5 21c-28 53-83 52-105-24zm16-25c-31-63 23-165 67-89l15-30 4 26-16 29c-29-54-80-14-70 64z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'w3c'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
