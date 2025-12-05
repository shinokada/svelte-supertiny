<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#EA4335"
    d="M100.6 261.4l19.3 19.3 41.6-41.5-19.1-19.3-8.7-8.7c-7-7-10.7-16-10.7-25.9 0-8.6 2.9-16.4 7.9-22.5 6.8-8.6 17.2-14.1 28.8-14.1 9.9 0 19 3.9 26.1 10.9l8.6 8.2 19.3 19.4 41.8-41.5-19.4-19.3-8.7-8.4c-17.4-17.3-41.3-28-67.7-28C106.8 90 64 132.8 64 185.4c0 13.1 2.6 25.6 7.5 37.1s11.8 21.7 20.6 30.3l8.6 8.6"
  /><path fill="#FBBC04" d="m255.5 228.8-41.8-41.6-93.8 93.5 41.6 41.6z" /><path
    fill="#34A853"
    d="m255.3 414-93.8-91.7 41.7-41.5 52.1 52 93.8-93.6 41.8 41.5Z"
  /><path
    fill="#4285F4"
    d="M418.7 252.8c19.4-19.5 30.6-49.3 27.5-79.4-4.6-45.7-42.5-80-88.5-83.1-29-1.9-55.6 8.9-74.3 27.7l-69.7 69.2 41.5 41.5 69.7-69.3c8.4-8.3 20.1-12.1 32.1-10.2 15.6 2.4 28.2 15.2 30.3 30.8 1.7 11.7-2.2 23-10.5 31.3l-27.7 27.9 41.8 41.5 27.7-27.9Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
