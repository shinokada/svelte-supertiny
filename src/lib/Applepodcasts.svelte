<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'applepodcasts',
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
  <path d="m0 0H512V512H0" fill="url(#a)" /><linearGradient id="a" x2="0" y2="1"
    ><stop offset="0" stop-color="#d56efc" /><stop
      offset="1"
      stop-color="#832bc1"
    /></linearGradient
  >
  <path
    d="M255.9 188.7a37 37 0 110 74 37 37 0 010-74ZM199.2 324.6a2 2 0 01-3.2 2 106.3 106.3 0 11119.86-.1 2 2 0 01-3.2-1.9L312 306c.7-1.5 1.5-3.4 3-4.7a86 86 0 10-118 .1 6.4 6.4 0 012 4.6Zm6.6 61.6c-.9333.7667-1.8667 1.5333-2.8 2.3a159 159 0 11105.2.1c-1.5.5-3-.7-2.9-2.3l2.3-16.3c1.0667-1.4 2.1333-2.8 3.2-4.2a138.6 138.6 0 10-110.5-.1c1.8.8 3 2.4 3.2 4.3ZM256 278c14 0 26 4.6 32.7 11.7 3.6 3.8 5.4 7.6 6 13a171 171 0 01-.7 34.2 823.5 823.5 0 01-6.3 51c-2 13.5-3.8 20.7-5.3 25.9-2.5 8.4-11.8 15.7-26.4 15.7s-23.9-7.4-26.4-15.7c-1.6-5.2-3.3-12.4-5.3-25.8a779.8 779.8 0 01-6.3-51.1 166.5 166.5 0 01-.8-34.2c.6-5.4 2.5-9.2 6-13A45 45 0 01256 278z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'applepodcasts'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
