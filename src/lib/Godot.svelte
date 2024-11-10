<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'godot',
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
  <path d="m0 0H512V512H0" fill="none" /><g id="a"
    ><path
      d="m257 435c-83 0-168-23-169.5-87V218Q77 205 64 184.5q13-22 34.4-45.1 18 9 34.1 19.8 19-17 36.5-26.6-2.6-18-3.2-42.1Q189 79 217 73q10 17 19 37 9-1.7 21-1.6v135.3a12 11 0 00-13 11v34.5a12 11 0 0013 11m-90-78.6a37.6 37.6 0 101 0"
      fill="#478cbf"
    /><circle cx="171.1" cy="261.4" r="25" fill="#414042" /><path
      d="m86.7 326.3 63 6.1 2.3 33.3 66.4 4.8 4.7-31.6h35"
      fill="none"
      stroke="#fff"
      stroke-linejoin="round"
      stroke-width="13.4"
    /></g
  ><use xlink:href="#a" transform="matrix(-1 0 0 1 512 0)" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'godot'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
