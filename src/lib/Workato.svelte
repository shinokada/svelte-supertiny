<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
  fill="#fff"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="#111010" /><path
    fill="#67eadd"
    d="m439 166c13.5 21.8 7 50.7-14.7 64.4-14.5 9.1-31.9 9-46 1.7l-.2-.1-.2-.1c-1.3-.5-2.6-1-5-1.3-2.6-.4-5.4-.1-8.7.8H364c-1.6.6-3.1 1.3-4.6 2.3-9.3 5.9-12.2 18.2-6.5 27.5l21.5 34.9c13.5 21.8 7 50.7-14.7 64.4-21.6 13.6-50.2 7.1-63.7-14.9l-21.2-34.2c-5.9-9.5-18.2-12.4-27.5-6.4a20.2 20.2 0 00-9.4 16.8v.2c0 15.7-7.6 30.9-21.7 39.8-21.6 13.6-50.2 7.1-63.7-14.9L73 218.4c-13.5-21.9-7-50.8 14.8-64.4 21.6-13.7 50.2-7.1 63.7 14.9l21.2 34.3c5.8 9.4 18 12.3 27.2 6.6l.3-.2c5.9-3.7 9.1-10 9.4-16.4-.3-15.9 7.5-31.4 21.7-40.4 21.6-13.6 50.2-7.1 63.7 14.9l21.4 34.6c5.9 9.5 18.2 12.4 27.5 6.4 2.2-1.4 4.2-3.8 6.1-7.2-.7 1.4-.7 1.2.2-.4 1.3-2.5 2.1-4.4 2.5-5.9.4-1.4.6-2.8.8-4.1 1.7-17.9 7.7-31.2 21.8-40.1 21.6-13.6 50.2-7.1 63.7 14.9z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
