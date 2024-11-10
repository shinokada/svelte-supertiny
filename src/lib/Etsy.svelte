<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'etsy',
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
  fill="#fff"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#f2521b"
    d="M218 137q0-6 8-6h94q23 0 31 40l5 20h16q3-67 5-86-41 5-64 5H194l-64-2v17l22 4c16 2 19 6 20 20q2 108 0 216c0 12-5 17-20 19l-22 4v17l64-2h107q31 0 81 2 5-44 11-89h-16l-16 36c-13 29-31 30-52 30h-61q-30 0-30-25v-93q43 0 60 1 18 0 22 20l5 22h18l-1-53 2-54h-18l-6 24c-4 16-6 18-22 20q-17 2-60 1z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'etsy'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
