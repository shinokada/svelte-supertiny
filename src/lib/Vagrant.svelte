<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'vagrant',
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
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M256 264.16v37l-29.4 14.56-59-132.7v-25.9l43.9-25.4.3.18v29.18ZM418.03 144.98 319.14 387.1 256 423.5V330.46l29.41-20.34 58.94-127.1V157.14L418 114.3Z"
    fill="#1159cc"
  /><path
    d="M167.63 183v-25.93l44.19-25.44-73.66-43.15-44.19 25.8v31.6l99.45 241.5 62.58 36.1v-90.7l29.43-17.1-.35-.2 59.29-132.46v-25.9l73.66-42.8-44.2-25.8-73.6 43.1h-.05v29.48L256 264.16v34.45l-29.47 17.1z"
    fill="#127eff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'vagrant'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
