<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'gemini',
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
  <path d="M0 0h512v512H0" fill="#fff" /><path
    d="M434 256.86A189.08 189.08 0 0 0 256.86 434h-.72A189.06 189.06 0 0 0 79 256.86v-.72A189.06 189.06 0 0 0 256.14 79h.72A189.08 189.08 0 0 0 434 256.14v.72Z"
    fill="url(#a)"
  /><radialGradient
    id="a"
    cx="0"
    cy="0"
    r="1"
    gradientTransform="matrix(357.94175 121.03963 -969.60352 2867.33838 114.23 223.28)"
    gradientUnits="userSpaceOnUse"
    ><stop offset=".07" stop-color="#9168C0" /><stop offset=".34" stop-color="#5684D1" /><stop
      offset=".67"
      stop-color="#1BA1E3"
    /></radialGradient
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'gemini'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
