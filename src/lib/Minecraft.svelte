<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'minecraft',
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
  fill="none"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="#111" /><use
    xlink:href="#a"
    transform="matrix(-1 0 0 1 513 0)"
    opacity=".5"
  /><g id="a" transform="matrix(19 11 0 22 76 142)"
    ><path fill="#432" d="M.5.5h9v9h-9" /><path stroke="#864" d="M2 8v1h2V8h5V7H7V5" /><path
      stroke="#643"
      d="M1 5zM2 9zM1 8V7h2V6h1M5 9h2V8H6V4M7 6h1v1M9 9zM9 4v1"
    /><path stroke="#a75" d="M1 7h1M4 7h1M9 6z" /><path stroke="#555" d="M5 5z" /><path
      stroke="#593"
      d="M4 4V1h4v2H7V2H4v1H2v1"
    /><path stroke="#6a4" d="M2 1h1M6 1zM7 2zM9 1v1" /><path stroke="#7c5" d="M5 3zM3 2h1" /><path
      stroke="#9c6"
      d="M1 1v1h1M8 1z"
    /><g transform="matrix(-1 1-1 0 19.5-9)"
      ><path fill="#7b4" d="M.5.5h9v9h-9" /><path
        stroke="#8c5"
        d="M1 1zM3 1zM4 7zM3 4v2H1v2h3v1h2V7M2 3h4V1H5v1h3M7 4v1H4M9 4v2H8v3"
      /><path stroke="#ad7" d="M1 3v2M1 7zM1 9zM3 3zM4 4zM5 1zM5 3zM5 5v1M5 8v1M7 2v1M8 7h1" /></g
    ></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'minecraft'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
