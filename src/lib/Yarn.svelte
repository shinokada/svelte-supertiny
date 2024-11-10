<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'yarn',
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
  fill="#117cad"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" /><path
    stroke="#fff"
    stroke-width="16"
    d="M411 310c39 3 26 45 5 43-18-1-83 49-111 51-9 13-79 17-110 15-12-1-20-14-20-14-32 17-62 0-53-21-21-7-24-67 3-86-2-17 7-65 44-95 0 0-28-37-1-68 25-10 33-37 72-35 32-77 56-2 56-2s14-12 24 7c8 17 19 76-24 137 44 49 33 102 33 102 12 0 59-38 82-34"
  /><path fill="#fff" d="M172 399c8-7 12-32 12-32l11 10s-20 10-10 28l-13-6" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'yarn'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
