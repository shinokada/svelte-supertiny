<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'php',
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
  <path d="m0 0H512V512H0" fill="#777bb3" /><g stroke="#fff" stroke-width="6"
    ><path
      id="a"
      d="M168 256c2-16 3-26-24-26H126l-11 53h18c18 0 31-8 35-27Zm-13-54c51 0 55 31 50 56s-26 53-68 53H110l-7 35s0 2-3 2H70s-3 0-3-3L94 204a3 3 0 013-2h58Z"
    /><path
      d="M304 312c5 0 5-3 5-3l13-69c3-20-6-37-42-37H254l7-34s1-3-2-3H229c-4 0-4 2-4 2L197 309s0 3 3 3h29c4 0 4-3 4-3l15-78h18c24-1 18 7 18 15l-12 61s-1 4 3 4Z"
    /><use xlink:href="#a" x="239" /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'php'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
