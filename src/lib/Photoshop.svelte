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
  <path d="m0 0H512V512H0" fill="#001e36" /><path
    fill="#31a8ff"
    d="M178.8 136c67 0 104.6 31.3 104.6 83.8 0 61.2-51 85.9-99 85.9H152v66.2H86.5V136h92.3ZM152 192v57.7h29c20 0 34-8.1 34-28.5 0-18.7-11.9-29.3-32.7-29.3H152ZM296.7 360.3l.4-54.6c18.7 12.3 44.7 20 62.7 20 12.3 0 18-3.4 18-9.8 0-7-7.8-9.8-22.6-14.4-28.5-8.5-59.9-20.1-59.9-57.4s31.4-59.2 76.8-59.2a135 135 0 0 1 54.6 9.8l-.3 52.2c-12.4-7.4-36.7-14.1-52.5-14.1-11.6 0-16.2 3.5-16.2 8.8 0 6.3 5.6 8 22.5 13.4 32.8 9.8 60.3 20.4 60.3 58.8s-30 61.3-76.8 61.3c-24.7 0-48-4.2-67-14.8Z"
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
