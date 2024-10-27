<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'finder',
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
  <path d="m0 0H512V512H0" fill="url(#b)" /><linearGradient id="a" x2="0" y1="1"
    ><stop offset="0" stop-color="#1e73f2" /><stop
      offset="1"
      stop-color="#19d3fd"
    /></linearGradient
  ><linearGradient id="b" x2="0" y1="1"
    ><stop offset="0" stop-color="#dbe9f4" /><stop
      offset="1"
      stop-color="#f7f6f6"
    /></linearGradient
  ><path fill="url(#a)" d="m0 0h262q-65 162-64 286c0 7 6 13 13 13h64q-6 113 28 213H0" /><g
    fill="none"
    stroke="#222"
    stroke-linecap="round"
    ><path stroke-width="21" d="m133.5 157.5v34m226.5-34v34" /><path
      stroke-width="17"
      d="m394 345c-55 81-241 81-295.5 0"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'finder'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
