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
  <path fill="#fff" d="M0 0h512v512H0" /><linearGradient id="d" y1="1"
    ><stop stop-color="#0a00b2a6" offset="" /><stop offset=".5" stop-color="#ff0000a6" /><stop
      offset="1"
      stop-color="#fffc00a6"
    /></linearGradient
  ><mask id="e"
    ><g id="c" fill="#fff"
      ><g id="b"
        ><path
          id="a"
          d="M-25-166q-7 22 0 46A44 44 90 0 0-4-98a11 11 90 0 0 10 0q21-13 23-38c3-29-10-53-28-76q-18 22-26 46"
        /><use href="#a" transform="rotate(24)" /><use href="#a" transform="rotate(48)" /></g
      ><use href="#b" transform="rotate(72)" /><use href="#b" transform="rotate(144)" /><use
        href="#b"
        transform="rotate(216)"
      /><use href="#b" transform="rotate(288)" /></g
    ></mask
  ><mask id="f"><use href="#c" transform="rotate(12)" /></mask><g
    fill="url(#d)"
    transform="translate(256 256)"
    ><circle r="256" mask="url(#e)" /><circle r="256" mask="url(#f)" /></g
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
