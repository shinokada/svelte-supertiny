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
  <path d="M0 0h512v512H0" fill="#fff" /><path
    fill="#e6522c"
    d="M251.56 3.66C112.63 3.66 0 116.28 0 255.22c0 138.92 112.63 251.55 251.56 251.55s251.56-112.63 251.56-251.55c0-138.94-112.63-251.56-251.56-251.56m0 470.81c-39.52 0-71.57-26.4-71.57-58.96h143.15c0 32.55-32.05 58.96-71.58 58.96m118.22-78.5H133.33V353.1H369.8zm-.85-64.94H134.01q-1.2-1.33-2.34-2.7c-24.2-29.39-29.9-44.73-35.44-60.37-.1-.51 29.35 6.02 50.23 10.72 0 0 10.74 2.48 26.45 5.35-15.08-17.68-24.04-40.15-24.04-63.12 0-50.43 38.68-94.5 24.73-130.11 13.58 1.1 28.1 28.66 29.08 71.74 14.44-19.95 20.48-56.38 20.48-78.72 0-23.13 15.24-50 30.48-50.91-13.58 22.4 3.53 41.6 18.73 89.22 5.7 17.9 4.98 48 9.38 67.1 1.47-39.66 8.28-97.52 33.44-117.5-11.1 25.16 1.64 56.64 10.36 71.77 14.06 24.42 22.58 42.91 22.58 77.9 0 23.46-8.66 45.54-23.27 62.8 16.61-3.1 28.08-5.92 28.08-5.92l53.95-10.52s-7.84 32.23-37.96 63.27"
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
