<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'safari',
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
    ><stop stop-color="#0bd" offset="0" /><stop offset="1" stop-color="#17d" /></radialGradient
  ><g transform="matrix(4 0 0 4 256 256)"
    ><g stroke="#eee" fill="none"
      ><circle r="52.5" fill="url(#a)" stroke-width="5" /><circle
        r="45"
        stroke-dasharray="1.25 8.175"
        stroke-dashoffset=".5"
        stroke-width="5.5"
      /><circle r="42.5" stroke-dasharray="1.25 7.65" stroke-dashoffset="5" stroke-width="10" /></g
    ><path d="M-35 33-6-6 6 6" fill="#eee" /><path d="M35-34-6-6 6 6" fill="#f55" /><path
      opacity=".3"
      d="M-35 33l7-5-3 5L6 6l28-35-4 2 4-6"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'safari'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
