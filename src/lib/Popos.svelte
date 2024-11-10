<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'popos',
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
  <path d="m0 0H512V512H0" fill="#48b9c7" /><path
    d="M340 359a15 15 0 110 30H165a15 15 0 110-30Zm-34-47c14 5 12 33-7 30-20-8-8-33 7-30Zm6-120c5-29 61-12 50 13-52 124-73 120-50-13Zm-88 25q13 1 12-22-1-24-19-41t-23-5q-5 13 8 41t22 27Zm-80-72c94-109 210 47 89 108 4 29 35 72 17 87-19 10-33-19-66-83-28-64-60-91-40-112Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'popos'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
