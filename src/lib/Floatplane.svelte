<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'floatplane',
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
  <path d="m0 0H512V512H0" fill="#0085ff" /><path
    d="m342.7 283 2.3-9a19 19 0 001-7.2 37.4 37.4 0 00-3.3-10l-85.5 79.8s5.2 5.4 13.3 0l37.7-26.6 100.5 78.3a5.8 5.8 0 006.7.4l22.1-14.1zm-123 31 46.9-36 18 14 29.8-36-9.8-9.6 3.1-11.3a33.4 33.4 0 001.8-12.8 48 48 0 00-5.3-14.4L186.6 325.6s3.6 3 11.3 0l33.2 30.7a3.6 3.6 0 004 .5l11.3-6.7zM199 293.2l-36.5-27.5-6.7 11.3a3.2 3.2 0 00.5 4l30.8 33.3zm65.7-86.9-8.4-8.7 2.2-8.9a25.8 25.8 0 001-9 35.2 35.2 0 00-4-10l-79.8 85.5s5.4 5.2 13.2-.8l32-26.3 13.6 17.4zm-36-37.3-91-94-14.2 22.1a5.8 5.8 0 00.5 6.7L202.9 205zM209 118.6a147.9 147.9 0 01184.8 184.7l16.5 16.6A167.5 167.5 0 00192.5 102ZM349.3 369a146.1 146.1 0 01-206-205.9l-13.4-17a167.5 167.5 0 00236.5 236.5z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'floatplane'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
