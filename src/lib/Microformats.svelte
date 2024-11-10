<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'microformats',
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
    ><linearGradient id="b" y2="1"
      ><stop offset="0" stop-color="#6ba140" /><stop
        offset="1"
        stop-color="#77ae40"
      /></linearGradient
    ><linearGradient id="m" y2="1"
      ><stop offset="0" stop-color="#92c73c" /><stop
        offset="1"
        stop-color="#78b143"
      /></linearGradient
    ><linearGradient id="t" y2="1"
      ><stop offset="0" stop-color="#BCD531" /><stop
        offset="1"
        stop-color="#94c63a"
      /></linearGradient
    ></defs
  ><g stroke="#fff" stroke-width="15"
    ><rect x="108" y="159" width="246" height="246" rx="51" fill="url(#b)" /><rect
      x="192"
      y="126"
      width="192"
      height="192"
      rx="39"
      fill="url(#m)"
    /><rect x="276" y="114" width="132" height="132" rx="24" fill="url(#t)" /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'microformats'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
