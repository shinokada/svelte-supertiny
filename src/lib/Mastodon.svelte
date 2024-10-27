<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'mastodon',
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
  fill="#fff"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" /><linearGradient id="a" y2="1"
    ><stop offset="0" stop-color="#6364ff" /><stop
      offset="1"
      stop-color="#563acc"
    /></linearGradient
  ><path
    fill="url(#a)"
    d="M317 408q-55 32-138 9-57-23-70-69-6-21-9-53-9-116 3-147 19-48 75-58 64-10 162 0 53 9 72 58 6 15 3 116-5 67-72 80-80 13-149-2-1 67 123 39"
  /><path
    d="M360 202q0-51-43-60-35-5-51 21l-9 15-9-15q-18-26-51-21-43 9-44 60v91h36V205q0-31 30-28 20 3 20 34v47h36V211q0-31 20-34 28-3 29 23v93h36"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'mastodon'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
