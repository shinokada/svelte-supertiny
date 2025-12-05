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
  <path d="m0 0H512V512H0" fill="url(#a)" /><path
    fill="#3b808b"
    d="M512 408v53c0 29-22 51-51 51h-96L189 338a154 154 0 0 0 50 31c36 12 80 13 136-9l2 2q0 3 5 2l9-4q5-3 3-5l12-5q5 0 2-9l-7-12h-5l-9 4-5-2-8 4-2 3v2a101 101 0 0 1-106-60l-85 43-14-11 92-47-10-36-101 44-11-12 109-48-7-78zM114 218h7l2 9z"
  /><path
    fill="#fff"
    d="m241 140-2-5h-5l-126 54-6 4v5l11 19 1 1h7q5 23 16 43l109-48zm8 89-106 47q9 19 24 36l92-47zm159 112-7-12h-5l-9 4-5-2-8 4-2 3v2a101 101 0 0 1-106-60l-89 44q24 29 62 45c36 12 80 13 136-9l2 2q0 3 5 2l9-4q5-2 3-5l12-5q5 0 2-9"
  /><defs
    ><linearGradient
      id="a"
      x1="0"
      x2="1"
      y1="0"
      y2="0"
      gradientTransform="matrix(0 512 -512 0 273 0)"
      gradientUnits="userSpaceOnUse"
      ><stop offset="0" stop-color="#bdddeb" /><stop
        offset="1"
        stop-color="#53a9d1"
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
