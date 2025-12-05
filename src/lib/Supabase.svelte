<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M0 0h512v512H0z" fill="#fff" /><defs
    ><linearGradient id="a" x1="258.4" x2="402.4" y1="248" y2="311.2" gradientUnits="userSpaceOnUse"
      ><stop offset="0" stop-color="#249361" /><stop
        offset="1"
        stop-color="#3ECF8E"
      /></linearGradient
    ><linearGradient id="b" x1="193.6" x2="260.2" y1="162.2" y2="286" gradientUnits="userSpaceOnUse"
      ><stop offset="0" /><stop offset="1" stop-opacity="0" /></linearGradient
    ></defs
  ><path fill="url(#a)" d="M294 448a18 18 0 0 1-32-11l-4-241h162a36 36 0 0 1 29 58L294 448Z" /><path
    fill="url(#b)"
    fill-opacity=".2"
    d="M294 448a18 18 0 0 1-32-11l-4-241h162a36 36 0 0 1 29 58L294 448Z"
  /><path fill="#3ECF8E" d="M226 59a18 18 0 0 1 32 11l4 241H100a36 36 0 0 1-29-57L226 59Z" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
