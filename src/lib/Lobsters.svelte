<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'lobsters',
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
  <path d="m0 0H512V512H0" fill="#ac130c" /><path
    d="M421.1 312.9H398.9c0 12-5.8 35.2-10.6 45-8.8 17.7-26.8 32.2-48.4 36.6-20.8 3.8-41.6 3.2-64.9 3.4-32.4-5.8-42.1-23.7-41.2-57.6V157c-.1-18.6-2.4-45.3 21-51.5 6.3-1.5 19.6-2.4 29.8-2.7v-21H114v21c8.9.6 19.5 1.6 24.9 3.1 22 4.8 22.4 26.7 23.9 47.9V353.6c0 10.4-1.1 18.9-2.3 25.5-2.4 12-10.9 19.5-23.9 22.8-6.3 1.5-14.4 2.4-24.2 2.7v23.5H421Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'lobsters'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
