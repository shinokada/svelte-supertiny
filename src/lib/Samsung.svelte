<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'samsung',
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
  fill="#117cad"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="#034ea2" /><path
    fill="#fff"
    d="M381 225l13 47V225h15v59H388l-15-48v48H358V225Zm-240 0 11 59H136l-8-53-8 53H104l11-59Zm173 0v46c0 2 2 4 6 4 5 0 6-2 6-4V225h15v45c0 11-9 15-20 15-12 0-20-4-21-15V225Zm-124 0 7 45 7-45h24l1 59H214V231l-9 53H190l-11-53v53H164l1-59Zm75-1c8 0 20 2 20 15v4H270v-4c0-2-1-5-5-5s-5 3-5 4v3c2 8 27 9 26 28 0 13-7 17-21 17-11 0-23-5-22-21h16v5c0 2 2 5 6 5s5-2 5-4v-4c-2-4-24-11-27-23-1-15 6-20 22-20m160 15c0-17 38-20 39 0v6H451v-5c-1-5-12-5-12 0v31c0 5 12 5 13 0V260h-5v-8h17v20c0 17-38 21-39 0V239M72 224c8 0 20 2 20 15v4H77v-4c0-2-1-5-5-5s-5 3-5 4v3c2 8 27 9 26 28 0 13-7 17-21 17-11 0-23-5-22-21H66v5c0 2 2 5 6 5s5-2 5-4v-4c-2-4-24-11-27-23-1-15 6-20 22-20"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'samsung'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
