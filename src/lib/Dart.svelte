<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'dart',
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
    fill="#01579b"
    d="M93.6 294.2c-10-13.3-9.5-27.5-.8-42.3l51.3-107.2 8.1 208.6z"
  /><path fill="#40c4ff" d="m365.2 363.9-200.9 1.6 59.7 60.3 141.1.4z" /><path
    fill="#2cb7f6"
    d="M297.6 99c-14.2-15.4-31.6-17.1-52.1-5.7l-101.4 51.4v184.5c-.5 9.2 2.6 18.8 8.1 24.2l12.3 12.2h200.7L353 155.44z"
  /><path
    fill="#01579b"
    d="M426.1 365.6H365.2L144.1 144.7H329.7c8.5-.1 16.5 3.2 24 10.3l72.4 70.9Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'dart'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
