<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'outlook',
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
  <path d="m0 0H512V512H0" fill="none" /><rect
    width="231"
    height="270"
    x="168"
    y="107"
    fill="#05a"
    rx="3%"
  /><path fill="#136" d="M398 247v23l15-8s0-7-5-9l-10-6zm-230 43v70h77v-70h-77z" /><path
    fill="#17d"
    d="M168 150v70h77v-70h-77zm77 70v70h77v-70h-77zm77 70v70h77v-70h-77z"
  /><path fill="#3ae" d="M245 150v70h77v-70h-77zm77 70v70h77v-70h-77z" /><path
    fill="#5cf"
    d="M322 150h77v70h-77z"
  /><path fill="#19e" d="M413 261 282 336s121 73 124 71c5-3 7-11 7-18V261Z" /><path
    fill="#2ae"
    d="M160 266c-4 3-6 7-6 12v117c0 8 6 14 14 14h230c4 0 5 0 8-2"
  /><rect width="172" height="172" x="70" y="172" fill="#18e" rx="3%" /><path
    fill="#fff"
    d="M155 230c14 0 22 11 22 29s-9 28-23 28c-11 0-22-10-22-28 0-15 7-29 23-29Zm-1 75c26 0 44-18 44-47 0-25-16-46-43-46-28 0-44 20-44 48 0 27 20 45 43 45Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'outlook'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
