<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'svelte',
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
    fill="#ff3e00"
    d="M149 138a103 103 0 00-36 138A115 115 0 00274 431l89-57a108 108 0 0036-138A115 115 0 00238 81zm99 256a70 70 0 01-102-83 109 109 0 0043 21 22 22 0 0032 23l89-57a20 20 0 00-23-33l-34 21A66 66 0 01175 175l89-57a70 70 0 01102 83 115 115 0 00-43-21 21 21 0 00-32-23l-89 57a20 20 0 0023 33l34-21a66 66 0 0178 111z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'svelte'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
