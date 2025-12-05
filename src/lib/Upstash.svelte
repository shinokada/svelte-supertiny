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
  <path d="M0 0h512v512H0z" fill="#fff" /><g fill="#00c98d"
    ><path
      d="M125 379c60 60 153 60 210 0 60-57 60-153 0-210l-24 24c42 45 42 117 0 159a111 111 0 0 1-159 0l-27 27Z"
    /><path
      d="M179 328c27 27 75 27 105 0 30-30 30-78 0-108l-27 27c15 15 15 39 0 54a36 36 0 0 1-54 0l-24 27Z"
    /></g
  ><g fill="#66dfbb"
    ><path
      d="M389 115a150 150 0 0 0-210 0 150 150 0 0 0 0 213l24-27a114 114 0 0 1 0-159c45-45 117-45 159 0l27-27Z"
    /><path
      d="M335 169a75 75 0 0 0-105 0 75 75 0 0 0 0 105l27-27a38 38 0 0 1 0-54 36 36 0 0 1 54 0l24-24Z"
    /></g
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
