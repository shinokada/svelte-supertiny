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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><defs
    ><linearGradient
      id="b"
      x1="301"
      x2="703"
      y1="151"
      y2="553"
      gradientTransform="matrix(.5 0 0 .5 45 88)"
      gradientUnits="userSpaceOnUse"
      ><stop stop-color="#276dc3" offset="0" /><stop
        stop-color="#165caa"
        offset="1"
      /></linearGradient
    ><linearGradient
      id="a"
      x1="1"
      x2="591"
      y1="4"
      y2="594"
      gradientTransform="matrix(.6 0 0 .4 45 88)"
      gradientUnits="userSpaceOnUse"
      ><stop stop-color="#cbced0" offset="0" /><stop
        stop-color="#84838b"
        offset="1"
      /></linearGradient
    ></defs
  ><path
    d="M261 138c78 0 136 26 136 86 0 59-58 85-136 85s-142-38-142-85c0-48 64-86 142-86ZM232 339c103 0 187-56 187-125S335 89 232 89 46 145 46 214s83 125 186 125Z"
    fill="url(#a)"
  /><path
    d="m330 283 18 7 9 6 4 6 44 75h-72l-33-63s-7-12-11-15-5-4-9-4h-17v82h-63V167h127s58 1 58 56c0 56-55 60-55 60zm-28-71h-38v36h38s18 0 18-18-18-18-18-18z"
    fill="url(#b)"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
