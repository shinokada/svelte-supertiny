<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'kodi',
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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#17b2e7"
    ><path
      d="M441.5 269.5L383 327.9c-7 7-14.5 7-21.5 0l-60.3-60.4c-6.8-6.8-6.8-14.3 0-21.1l60.6-60.7c6.6-6.5 14.3-6.5 20.9 0l58.7 58.8c9 8.7 8.4 16.6 0 25z"
    /><path
      d="m245 441-58.3-58.5c-7-7-7-14.4 0-21.4l60.4-60.4c6.7-6.7 14.3-6.7 21 0l60.4 60.4c6.9 6.9 7 14.5 0 21.4l-58.8 59c-8.6 8.7-16.5 7.6-24.7-.6z"
    /><path
      d="M184 141.5c0-6.5 1.5-11.6 6.4-15.8 18.8-18.4 39-38.9 55.6-55.5 7-7 14.4-7 21.3 0l60.3 60.3c6.9 6.9 6.9 14.5 0 21.4L193.4 286.2c-7.8 4.2-9-1.5-9.2-7.7-.4-47.1.4-93.2-.2-137z"
    /><path
      d="M136.1 319V195.3c-.3-5.1-3-12.3-8.5-6.7l-60.2 61a10.4 10.4 0 000 15.4l61 61c4 3.9 7.8-1.8 7.7-7Z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'kodi'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
