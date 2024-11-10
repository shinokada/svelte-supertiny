<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'line',
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
  <path d="m0 0H512V512H0" fill="#00B900" /><path
    d="M443 231c3-82-83-150-186-150S69 149 69 231c0 73 67 135 155 147 41 5 9 38 20 52 11 9 95-49 148-96 30-27 49-58 51-103Z"
    fill="#fff"
  /><path
    d="M184 268H147V196m66 0v72m89-72v72l-54-72v72m123 0H335V196h36m-34 36h34"
    fill="none"
    stroke="#00B900"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="21"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'line'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
