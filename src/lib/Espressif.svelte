<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'espressif',
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
  <path d="m0 0H512V512H0" fill="#ff3034" /><path
    fill="#fff"
    d="M126 120.53a1 1 0 00266.53 266.52 1 1 0 1110.87 10.87A1 1 0 01115.14 109.66 1 1 0 01126 120.53m52.5 240.22a26 26 0 100 1M409 334A273 273 0 00177.5 102.5 150 150 0 00139 130v26a216 216 0 01217 216h26a111 111 0 0027-39M240 83l-4 12a298 298 0 01181 180l11-4A172 172 0 00240 83zm5 342a118 118 0 00-95-171 1 1 0 013-21 140 140 0 01120 177l31 9 26.5-10a195 195 0 00-163-230 1 1 0 10-18 131.5 63 63 0 0142 95.5l21 14z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'espressif'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
