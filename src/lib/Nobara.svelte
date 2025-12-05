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
  <path d="M0 0H512V512H0" fill="#fff" /><path
    d="M170.0,135.6c-15.42,1.24-28.72,12.52-32.58,27.64-1.36,5.36-1.18,186.56-1.18,186.56,5.18,33.9,49.02,44.96,68.0,16.5,19.48-29.16,64.8-17.66,67.54,17.14,0.14,1.78,0.16-44.42,0.16-44.42-3.84-17.82-16.7-29.5-36.08-30.84-13.46-1.04-21.94-7.66-24.7-19.28-1.24-5.26-0.92-33.58,0.48-40.06,11.54-50.72,82.06-51.88,95.64-2.44,0.38,1.66,0.46,1.8,1.5,2.08,9.22,2.54,36.12,10.34,36.12,10.46-1.48,0.68-29.46,8.56-35.94,10.42v80.46c6.52,42.58,65.1,43.74,73.72,2.08,0.86-5.02,0.52-102.86-0.4-109.16C371.64,158.12,277.42,109.8,202.54,149.32c-8.06-9.56-19.54-14.84-32.56-13.72"
  /><path
    d="M253.16,238.72c-21.26,4.88-26.5,33.24-8.3,45.0,18.32,11.84,41.84-3.74,38.1-25.24-2.34-13.46-16.44-22.82-29.78-19.76"
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
