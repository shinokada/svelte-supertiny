<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'edge',
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
  <path d="m0 0H512V512H0" fill="none" /><radialGradient id="a"
    ><stop offset=".8" stop-color="#159" /><stop offset="1" stop-color="#148" /></radialGradient
  ><radialGradient id="b" cy=".7" r=".7"
    ><stop offset=".8" stop-color="#18d" /><stop offset="1" stop-color="#07a" /></radialGradient
  ><radialGradient id="c" cx=".1" cy=".2" r="1"
    ><stop offset=".4" stop-color="#3ce" /><stop offset="1" stop-color="#3c5" /></radialGradient
  ><radialGradient id="d" cx=".9"
    ><stop offset="0" stop-color="#6e7" /><stop
      offset="1"
      stop-color="#6e7"
      stop-opacity="0"
    /></radialGradient
  ><path
    d="m233 214s-25 12-25 42a133 112 0 00202 94 6 6 0 019 7C316 514 90 454 187 237"
    fill="url(#a)"
  /><path
    d="m300 153H94a192 192 0 00220 286 116 120.3-2 01-74-228 48 49 0 0164 41"
    fill="url(#b)"
  /><path
    d="M64 253c4-110 186-138 233-31 26 70-34 65 3 88 71 30 159-7 147-102C400 3 75 16 64 253"
    fill="url(#c)"
  /><path d="m242 58c251 14 262 290 86 248" fill="url(#d)" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'edge'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
