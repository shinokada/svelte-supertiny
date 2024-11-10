<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'h feed',
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
    id="s"
    x="99.5"
    y="170"
    width="211.2"
    height="211.2"
    fill="#a3cc00"
    rx="41.5"
    stroke="#fff"
    stroke-width="19.2"
  /><use href="#s" x="76.75" y="-63.75" /><circle cx="240.25" cy="253.5" r="16" fill="#fff" /><path
    d="M224.25 204c36.5 0 65 29.5 65.45 65.45M224.25 165.5c61 0 104 50 104 104"
    fill="none"
    stroke="#fff"
    stroke-width="22.25"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'h feed'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
