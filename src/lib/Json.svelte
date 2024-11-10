<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'json',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a" x1=".175" y1=".15" x2="1" y2=".85"
    ><stop offset="0" /><stop offset="1" stop-color="#fff" /></linearGradient
  ><path
    id="b"
    fill="url(#a)"
    d="M256 64c-99 0-192 81-192 192 0 123 102 192 192 192-21 0-125-23-125-166 0-89 73-139 125-119 0 0 56 21 56 93s-56 93-56 93c51 20 125-27 125-119 0-129-87-166-125-166z"
  /><use transform="rotate(180 256 256)" href="#b" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'json'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
