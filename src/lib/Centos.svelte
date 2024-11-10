<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'centos',
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
  <path d="m0 0H512V512H0" fill="none" /><g id="g"
    ><rect x="118" y="118" fill="#9ccd2a" width="124" height="124" /><rect
      x="270"
      y="118"
      fill="#932279"
      width="124"
      height="124"
    /><rect x="270" y="270" fill="#efa724" width="124" height="124" /><rect
      x="118"
      y="270"
      fill="#262577"
      width="124"
      height="124"
    /></g
  ><use xlink:href="#g" transform="rotate(225 256 256)" /><path
    fill="none"
    stroke="#fff"
    stroke-width="9"
    d="m236 256-87 88-88-88 88-88zm6-14H118V118H242zm0 28V394H118V270zm14-34-88-87 88-88 88 88zm0 40-88 87 88 88 88-88zm14-34V118H394V242zm0 28H394V394H270zm6-14 87 88 88-88-88-88z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'centos'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
