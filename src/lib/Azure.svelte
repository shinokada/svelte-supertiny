<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'azure',
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
  fill="#fff"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs
    ><linearGradient id="c" x1="0.1" x2="0.6" y1="0" y2="1"
      ><stop offset="0" stop-color="#3ccbf4" /><stop
        offset="1"
        stop-color="#2892df"
      /></linearGradient
    ><linearGradient id="a" x1="0.5" y1="0.1" x2="0" y2="1"
      ><stop offset="0" stop-color="#114a8b" /><stop
        offset="1"
        stop-color="#0669bc"
      /></linearGradient
    ></defs
  ><path fill="#fff" d="M0 0h512v512H0" /><path
    fill="url(#a)"
    d="M208.2 120.5a13.6 13.6 0 00-12.9 9.2L113 373.5a13.5 13.5 0 0012.8 17.9H192a13.6 13.6 0 0012.9-9.2l88.3-261.7H208.1Z"
  /><path
    fill="#0078d4"
    d="M331.7 296.1H196.8a6.2 6.2 0 00-4.3 10.8l86.7 80.9a13.6 13.6 0 009.3 3.7h76.4z"
  /><path
    fill="url(#c)"
    d="M399.1 373.6a13.5 13.5 0 01-12.8 17.9H291.5a13.5 13.5 0 0012.8-17.9L222 129.8a13.5 13.5 0 00-12.8-9.2H304a13.5 13.5 0 0112.8 9.2Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'azure'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
