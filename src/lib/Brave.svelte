<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'brave',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a"
    ><stop offset="0" stop-color="#f50" /><stop offset="1" stop-color="#f20" /></linearGradient
  ><path
    d="M416 158l9-23c-24-25-33-43-72-34l-35-40H194l-35 40c-38-3-45 6-72 34l10 23-12 34 39 150c8 32 14 45 37 61l72 49c7 4 16 12 23 12 8 0 16-8 23-12l72-49c23-16 29-29 37-61l40-150"
    fill="url(#a)"
  /><path
    d="M308 343c8-7-13-16-22-20-10-5-20-8-30-11-10 2-20 6-30 11-9 5-30 11-22 20 15 11 34 27 52 39l52-39m35-216-43 7c-5 0-17-5-27-8s-17-3-17-3-7 0-17 3-22 8-27 8l-43-7s-45 54-45 66c0 16 32 42 45 57 17 13-7 31 3 51 7 12 18 20 25 19 17-5 48-21 55-41-2-15-38-20-45-35 0-15 18-27 17-44-2-15-45-22-59-29-2-2-1-3 6-3 21-3 47-4 66 8 8 19-16 63-3 71 19 3 26 5 45 0 13-3-8-55-4-71 14-11 49-10 66-8 8 0 8 1 6 3-15 5-51 15-59 29-1 13 17 31 17 44-2 14-42 18-44 36 2 19 40 32 55 40 7 1 18-7 24-19 9-16-14-35 3-51 15-15 42-36 45-57 0-12-45-66-45-66"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'brave'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
