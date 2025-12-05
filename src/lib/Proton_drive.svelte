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
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="url(#a)"
    d="m343 175h-229v169a29 29 0 0 0 29 29h200"
  /><path
    fill="url(#b)"
    d="M248 165h120c16 0 29 14 29 29V344c0 16-13 29-29 29h-31V222a23 23 0 0 0-23-23l-111 1a23 23 0 0 1-13-4l-25-17a23 23 0 0 0-13-4h-38v-4a29 29 0 0 1 29-29h55c6 0 11 2 15 5l18 13c5 3 10 5 15 5"
  /><defs
    ><radialGradient
      id="a"
      cx="0"
      cy="0"
      r="1"
      gradientTransform="matrix(527 0 0 480 420 -18)"
      gradientUnits="userSpaceOnUse"
      ><stop offset=".56" stop-color="#6d4aff" /><stop
        offset="1"
        stop-color="#ff50c3"
      /></radialGradient
    ><linearGradient
      id="b"
      x1="648"
      x2="1785"
      y1="266"
      y2="1526"
      gradientTransform="translate(-89 -61)scale(.31)"
      gradientUnits="userSpaceOnUse"
      ><stop offset="" stop-color="#7341ff" /><stop offset=".36" stop-color="#b487ff" /><stop
        offset="1"
        stop-color="#ffc8ff"
      /></linearGradient
    ></defs
  >
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
