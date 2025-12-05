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
  <path d="M0 0h512v512H0" style="fill:url(#a)" /><radialGradient
    id="a"
    cx="0.5"
    cy="0"
    r="1"
    fx="0.5"
    fy="0"
    ><stop offset="0" style="stop-color:#006efe" /><stop
      offset="1"
      style="stop-color:#003c9e"
    /></radialGradient
  ><path
    fill="#fff"
    d="M372.94 165.85h-28.98v-28.96h28.98zm0 38.95v-38.95h38.79v38.95zm-272.67-95.41h77.58v158c.7 30.98 18.79 72.03 78.15 76.31 59.36-4.28 77.45-45.33 78.15-76.31v-61.98l38.79-.61.2 39.61h38.59v23.06C410.57 338.21 356 422.06 256 422.13c-100-.07-154.57-83.92-155.73-154.66zm282.32-2.11h19.68v19.68h-19.68z"
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
