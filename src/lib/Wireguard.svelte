<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'wireguard',
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
  <path d="m0 0H512V512H0" fill="#88171a" /><path
    d="M130 374c7-29 32-49 62-49-8 10-12 23-13 36-16 3-33 6-49 13Zm62-195c40-25 85-16 115 28 4 7 4 18 2 26-8 27-28 42-55 48 8-6 14-15 16-25 9-56-78-62-74-2-1 17 12 29 37 33-13 8-24 15-36 30-2 3-4 3-8 1-48-30-51-106 3-139ZM312 83c-1-1-7 1-5 4 1 1 2 2 4 1l4-2-3-3ZM238 53c6 0 13-1 23-1 21 0 38 7 54 16 4 2 7 8 11 11 8 3 16 5 24 4V80c9 2 18 12 18 19H327c-1 0-3 1-4 2 1 1 3 3 4 3 8 0 19-1 29 1-3 5-9 16-16 9 0-2-39-1-49 1-2 0-4 4-3 6 7 17 29 24 40 35 28 22 37 42 31 80-17 67-45 71-104 97-17 8-27 27-24 46 7 41 72 52 85 4 4-19-1-46-37-54 16-7 31-15 45-24 2-2 4-2 6 0 40 37 50 105-16 145-47 26-106 4-125-46-19-51 11-106 64-117 38-6 77-46 60-83-10-22-45-44-64-60-5-3-16 1-25-1 4-3 14-7 18-10-13-8-28-5-41-8 3-6 18-15 27-16-2-19-1-17-21-27 21-14 37 7 56-9-12-4-24-8-35-15 15 1 30 7 45 5V61l-35-8Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'wireguard'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
