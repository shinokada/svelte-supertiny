<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'iheartradio',
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
    id="h"
    fill="#c6002b"
    d="M256.1 284.6c-20.9 0-37.8 16.9-37.8 37.8v72.1c-.1 7.1-7.3 9.7-13.6 5.8l-97.9-92.6c-25-25.2-49-52.5-49-90.3 0-59.6 48.3-107.9 107.9-107.9 37.5 0 70.9 19.9 90.3 48.8V189c-17.9 0-32.5 14.6-32.5 32.5s14.6 32.4 32.5 32.4Zm-60.2-8.7c6.8 3.5 16.1-6.1 7.4-13.2-17.3-9.7-28.9-28.5-29-46.9 0-16.9 9.3-32.4 24.3-40.2 7-3.9 3.5-16.9-7-13.2-19.8 10.3-32.3 30.9-32.3 54s14.7 47.1 36.6 59.4Zm-48.4 25.3c6.1 5.3 16.9-2.5 9.9-11.2-28.9-25.6-43.6-51.6-43.6-75.2s13.2-48.2 29.9-58.7c6.6-4.4 2.3-17-8-12.6-21 13.2-36.9 42.8-36.9 71.1 0 28.3 16.3 58.1 48.6 86.7Z"
  /><use transform="matrix(-1 0 0 1 510 0)" xlink:href="#h" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'iheartradio'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
