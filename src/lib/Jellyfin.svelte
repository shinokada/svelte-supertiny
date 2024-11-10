<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'jellyfin',
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
  <path d="m0 0H512V512H0" fill="none" /><defs
    ><linearGradient
      id="A"
      gradientUnits="userSpaceOnUse"
      x1="126.15"
      y1="219.32"
      x2="457.68"
      y2="410.73"
      ><stop offset="0" stop-color="#aa5cc3" /><stop
        offset="1"
        stop-color="#00a4dc"
      /></linearGradient
    ></defs
  ><path
    fill="url(#A)"
    d="M256 56.1C203.1 56.1 32.8 364.9 58.7 417s369 51.6 394.7 0S308.9 56.1 256 56.1zm0 79.1c34.7 0 146.1 202.7 129.3 236.5s-241.5 34.2-258.5 0S221.3 135.2 256 135.2zm0 74.1c-17.6 0-74.1 102.5-65.5 119.8s122.5 17.1 131 0-47.9-119.8-65.5-119.8z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'jellyfin'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
