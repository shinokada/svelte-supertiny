<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'humblebundle',
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
    d="M281 245.8 431.5 324c3.7 1.7 9.5 1.3 13.8-6.9s3.4-13.4-2.4-16.6L297.6 225.4ZM116.1 130.6c-2.9-1.4-9.3-4.8-15.5 5.1s-.2 16 4 18.1l107.2 56.1L244 197.4Zm140.1 22.9c.2-6 1.7-10.5 4.8-13.5 1.3-1.4 2.1-2.8 2.1-3.9s-1.3-1.1-4 .2a25.2 25.2 0 00-12.6 21.6 82.7 82.7 0 006.9 34l16.9-9.4c-9.4-9.3-14.1-18.9-14.1-29Zm18.9 103.9c.3 0-17.1 12.1-22.4 19-9.8 11.1-13.5 20.3-13.5 27.2.2 16.6 7.4 26.6 10 28.7-10-4.2-15.9-9.4-18-16 0 0-6.4-19.9 11.4-44.2 2.2-3 16.7-23 31.5-38.1 12.2-13.1 20.9-24.3 26-33.5a100.9 100.9 0 0011.4-33.8c2.7-16.6-11.1-30.6-15.2-31.2-2.2.4-1.8 2.2 1.3 5s4.5 7.1 4.5 12.8a31.6 31.6 0 01-4.5 16.4q-13 23.5-58.8 41.1c-.7.3-42.8 15.5-67.1 38.4-16.3 16.2-24.6 37.9-24.6 65.1.1 35.9 10.9 61.8 28.8 75s43.9 19.8 77.8 19.8q46.8.1 71.3-17.7t24.5-53.6c.1-41.9-11.9-48.4-16.2-50.8Z"
    fill="#cc2929"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'humblebundle'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
