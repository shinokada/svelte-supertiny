<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'sublimetext',
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
  fill="#ff9800"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="#424242" /><g transform="skewY(-17.5)"
    ><rect x="110" y="375" width="292" height="107" rx="8" fill="url(#g)" /><rect
      x="110"
      y="191"
      width="292"
      height="107"
      rx="8"
    /></g
  ><rect transform="skewY(17.5)" x="110" y="122" width="292" height="107" rx="8" /><linearGradient
    id="g"
    x1=".6"
    x2=".7"
    y1=".6"
    y2=".54"
    ><stop stop-color="#ff9700" offset="0" /><stop stop-color="#f48e00" offset=".5" /><stop
      stop-color="#d06f00"
      offset=".9"
    /></linearGradient
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'sublimetext'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
