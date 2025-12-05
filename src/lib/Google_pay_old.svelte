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
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><g transform="translate(64,64) scale(8)"
    ><path
      fill="#e64a19"
      d="M42.9 12c-4.5-2.6-10.4-1.1-13 3.5L23.3 26.9c-1.9 3.3.6 4.5 3.3 6.1l6.4 3.7c2.2 1.2 4.9.5 6.2-1.6L46 23.3c2.3-4 .9-9-3-11.3z"
    /><path
      fill="#fbc02d"
      d="m35.4 16.7L29 13c-3.5-2-5.5-2.1-7 .2l-9.4 16.3c-2.6 4.5-1.1 10.4 3.5 13 4 2.3 9 .9 11.3-3L37 22.9c1.3-2.2.5-4.9-1.6-6.2z"
    /><path
      fill="#43a047"
      d="m36.6 8.4-4.5-2.6c-5-2.9-11.3-1.2-14.1 3.8L9.5 24.3c-1.3 2.2-.5 5 1.7 6.2l5 2.9c2.5 1.4 5.6.6 7.1-1.9l9.7-16.9c2-3.5 6.5-4.7 10-2.7L36.6 8.4z"
    /><path
      fill="#1e88e5"
      d="M19.2 13.8c2.2 1.2 2.9 4 1.7 6.1l-5.5 9.5-1.5 2.6c-2.1 3.6-1 8.3 2.4 10.6l-1.9-1.1-4.5-2.6-3.7-2.1c-5-2.9-6.7-9.2-3.8-14.1L8.2 12.6c1.2-2.2 4-2.9 6.2-1.6l4.8 2.8Z"
    /></g
  >
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
