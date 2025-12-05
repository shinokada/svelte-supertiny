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
  <path d="M0 0h512v512H0" fill="url(#a)" /><defs
    ><linearGradient id="a" x1="65" x2="509" y1="39" y2="491" gradientUnits="userSpaceOnUse"
      ><stop offset="0" stop-color="#c373f2" /><stop
        offset="1"
        stop-color="#9610d6"
      /></linearGradient
    ></defs
  ><path
    fill="#fff"
    d="m256 82-143 61v96a198 198 90 0 0 143 188 198 198 90 0 0 143-191v-96zm0 96q41 3 44 37v24q17 3 21 20v58q-4 14-21 17h-88q-17-3-21-20v-55a21 21 90 0 1 21-20v-24c0-20 24-37 44-37m0 17q-21 3-24 20v24h48v-24q0-17-24-20"
  />
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
