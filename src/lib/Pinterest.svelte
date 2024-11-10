<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'pinterest',
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
  <path d="m0 0H512V512H0" fill="#bd081b" /><path
    d="M265 65c84 0 140 60 140 126 0 87-48 151-119 151-24 0-46-13-53-28l-16 61c-9 35-38 69-40 72l-3 1a249 249 0 01-2-86l29-120s-7-14-7-34c0-33 18-58 42-58 21 0 30 16 30 34 0 20-13 50-19 77-6 24 11 42 34 42 42 0 70-52 70-116 0-48-32-85-92-85-67 0-108 50-108 106 0 19 6 32 15 43 3 5 4 6 2 12l-3 18c-2 5-7 7-12 5-31-12-45-46-45-83 0-63 53-138 157-138Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'pinterest'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
