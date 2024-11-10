<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'nginx',
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
    fill="#009639"
    d="M82 343a22 22 0 0011 18l153 88a22 22 0 0020 0l153-88a22 22 0 0010-18V167a22 22 0 00-10-18L265 62a22 22 0 00-20 0L92 150a22 22 0 00-10 17Z"
  /><path
    fill="#FFF"
    d="m206 322a1 1 0 01-39 0V188c0-11 9-19 22-19 9 0 20 4 27 12l88 105v-98a1 1 0 0139 0v135c0 10-9 19-22 19-10 0-21-4-27-12l-88-105z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'nginx'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
