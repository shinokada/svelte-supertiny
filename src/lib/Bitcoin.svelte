<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'bitcoin',
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
  <path d="m0 0H512V512H0" fill="#f7931a" /><path
    fill="#fff"
    d="m391 216c6-43-25-64-68-79l14-55-34-9-13 54-28-7 14-54-35-9-13 56-22-5-47-12-8 36 24 6c14 4 17 14 15 21l-15 63 3 1-3-1-22 89c-2 5-6 11-16 8l-24-6-17 39 68 17-13 57 33 8 14-55 26 6-13 55 34 9 14-56c58 11 102 6 120-46 14-42-1-66-32-82 22-5 39-20 44-49zm-77 108c-11 41-82 20-105 14l19-75c23 6 97 17 86 61zm9-110c-9 39-67 20-87 15l17-68c20 5 81 14 70 53z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'bitcoin'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
