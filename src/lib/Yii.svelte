<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'yii',
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
    fill="#40B3D8"
    d="M310 311c-2-32-13-54-18-66s-13-23-13-23-7 39-20 66l-7 15c-9 16-22 31-30 46-7 15-9 29-8 46s5 34 9 50c14-3 26-8 37-15a109 109 0 0 0 49-76s1-1 1-3c2-23 1-30 0-40"
  /><path
    fill="#83C933"
    d="M310 311c-2-32-13-54-18-66s-13-23-13-23l-2-3c-41-57-120-86-187-60-3 41 16 111 84 130 28 9 50 7 78 14s27 10 43 24c8 7 15 15 15 26 2-25 1-32 0-42"
  /><path
    fill="#F18A2A"
    d="M280 188c-9-28-5-47 13-74a140 140 0 0 1 36-36c52 33 71 94 52 150-14 41-27 58-60 100 4-45-12-76-28-111l-13-29"
  /><path
    fill="#7FB93C"
    d="M310 353c0-11-7-19-15-26-16-14-43-24-43-24 3-4 5-10 7-15 13-27 20-66 20-66s8 11 13 23 16 34 18 66c1 10 2 17 0 42"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'yii'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
