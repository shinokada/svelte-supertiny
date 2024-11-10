<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'samsung_swoop',
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
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#034ea2"
    d="M470 219A61 210 80 0042 292a61 210 80 00428-73M349 233l10 35V233h11v44H354l-11-36v36H332V233Zm-179 0 8 44H166l-6-40-6 40H142l8-44Zm130 0v34c0 1 1 3 4 3 4 0 5-2 5-3V233h11v34c0 8-7 11-15 11-9 0-15-3-16-11V233Zm-94 0 5 34 5-34h18l1 44H224V237l-7 40H206l-8-40v40H187l1-44Zm57-1c6 0 15 1 15 11v3H267v-3c0-2-1-4-4-4s-4 2-4 3v2c2 6 21 7 20 21 0 10-6 13-16 13-8 0-17-4-16-16h12v4c0 2 1 4 4 4s4-1 4-3v-3c-1-3-18-8-20-17-1-11 4-15 16-15Zm120 11c0-13 28-15 29 0v5H402v-4c-1-4-9-4-9 0v23c0 4 9 4 10 0v-8h-4v-6h13v15c0 13-28 16-29 0V243ZM118 232c6 0 15 1 15 11v3H122v-3c0-2-1-4-4-4s-4 2-4 3v2c2 6 21 7 20 21 0 10-6 13-16 13-8 0-17-4-16-16h12v4c0 2 1 4 4 4s4-1 4-3v-3c-1-3-18-8-20-17-1-11 4-15 16-15Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'samsung_swoop'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
