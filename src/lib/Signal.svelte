<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'signal',
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
  <path d="m0 0H512V512H0" fill="#3a76f0" /><path
    d="M256 100A156 156 0 00124 339l-15 64 64-15a156 156 0 1083-288z"
    fill="#fff"
  /><path
    fill="none"
    stroke-dasharray="54.5,17"
    stroke="#fff"
    stroke-width="18"
    d="M403 147A183 183 0 0097 346l-18 76c0 3 0 6 3 8a9 9 0 008 3l76-18A183 183 0 00402 146M79 422c0 3 0 6 3 8a9 9 0 008 3"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'signal'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
