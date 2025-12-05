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
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M339 326a24 24 0 1 1 34 35l-42 42c-40 39-103 40-143 1l-76-74a99 99 0 0 1-7-139l69-73c36-39 103-43 144-9l62 50a24 24 0 0 1-30 38l-62-50a62 62 0 0 0-79 5l-68 73c-18 19-16 49 5 70l76 74c20 20 54 20 74-1z"
    fill="#FFA116"
  /><path d="M236 284a24 24 0 0 1 0-49h180a24 24 0 0 1 0 49z" fill="#B3B3B3" /><path
    d="M269 16a24 24 0 1 1 36 33L141 225c-18 19-16 49 5 70l75 74a24 24 0 0 1-34 35l-75-74a99 99 0 0 1-7-139z"
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
