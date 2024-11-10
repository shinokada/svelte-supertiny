<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'webassembly',
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
    fill="#654ff0"
    d="M437 75V437H75V75H214.4c0 .6 0 1.3 0 2 0 22.9 18.6 41.5 41.5 41.5S297.4 99.9 297.4 77c0-.7 0-1.4 0-2ZM353.7 301.7l12.1 47H333.2l10.5-47Zm-55.5 96.6h24.1l6.3-28.6h43.1l8.2 28.6h24.7L367.1 270.1H329.3Zm-111.6 0h24.3L230 311l17.8 87.3h23.8l30.6-128.2H278.7l-18.9 88.3-17.9-88.3H219.4l-19.8 87.2-16.5-87.2h-24Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'webassembly'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
