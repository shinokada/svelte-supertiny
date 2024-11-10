<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'telegram',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a" x2="0" y2="1"
    ><stop offset="0" stop-color="#2aabee" /><stop
      offset="1"
      stop-color="#229ed9"
    /></linearGradient
  ><path
    d="M291 220q6-4 8-1t-3 8c-31 32-54 50-67 65q-9 10 5 20l62 42c25 17 33 3 36-14q17-91 24-151c2-15-3-23-22-17q-27 8-194 81c-21 8-17 17-5 21s21 7 33 10 20 4 34-5M257 64a192 192 0 11-2 0"
    fill="url(#a)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'telegram'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
