<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'ebay',
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
    fill="#e53238"
    d="M97 222c-16 0-32 10-32 28h62c0-17-12-28-30-28Zm1-14c41 0 52 27 52 44v12H65c0 18 13 31 32 31 24 0 28-17 28-17h23s-3 30-49 30c-39 0-56-18-56-49 0-39 25-51 55-51Z"
  /><path
    fill="#0064d2"
    d="M150 171v119l-1 16h22l1-14s10 17 39 17c30 0 50-21 50-51 0-28-18-50-50-50-31 0-39 16-39 16v-53zm55 52c21 0 33 15 33 35 0 22-15 36-33 36-22 0-33-17-33-35s10-36 33-36z"
  /><path
    fill="#f5af03"
    d="M339 260c-34 0-58 0-58 17 0 10 7 18 23 18 39 0 35-35 35-35Zm-25-52c22 0 47 6 47 36v62H341l-1-14s-9 17-41 17c-23 0-40-12-40-32s18-31 53-31h27s4-24-27-24c-22 0-24 14-24 14H266c0-3 2-28 48-28Z"
  /><path fill="#86b817" d="M348 212h25l37 72 36-72h23l-65 129h-24l18-36z" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'ebay'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
