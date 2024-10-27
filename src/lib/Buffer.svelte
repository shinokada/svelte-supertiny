<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'buffer',
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
  <path d="m0 0H512V512H0" fill="#000" /><path
    d="M84 166q-7.5-4.5 0-9l162-75q10-4.5 20 0l162 75q7.5 4.5 0 9l-162 75q-10 4.5-20 0z"
  /><path
    id="a"
    d="M116 237q10.5-4.5 21 0l109 50q10 4.5 20 0l109-50q10.5-4.5 21 0l32 14q7.5 5 0 10L266 336q-10 3-20 0L84 261q-7.5-5 0-10Z"
  /><use transform="translate(0 94)" xlink:href="#a" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'buffer'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
