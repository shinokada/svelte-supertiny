<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'x11',
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
  <path d="m0 0H512V512H0" fill="none" /><defs
    ><linearGradient
      id="a"
      x1="319.2"
      x2="657.7"
      y1="235.1"
      y2="269.5"
      gradientTransform="translate(-248 9) scale(1.0368)"
      gradientUnits="userSpaceOnUse"
      ><stop offset="0" stop-color="#e54c18" /><stop
        offset="1"
        stop-color="#fec350"
      /></linearGradient
    ></defs
  ><path
    d="m106 414 116-150L103 98h76l95 130-142 186Zm226 0-94-130L380 98h26L290 249l118 165z"
  /><path
    fill="url(#a)"
    d="M351 175c56 22 93 62 93 108 0 69-84 125-188 125S68 352 68 283c0-44 35-83 87-106l10 16c-33 20-54 50-54 84 0 61 71 111 159 111s159-50 159-111c0-42-33-78-82-97l4-5Zm-95-17c24 0 47 3 68 8l-4 5c-16-3-33-5-50-5-1 0-12-2-18 7s12 26 20 45l-44-58 28-2Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'x11'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
