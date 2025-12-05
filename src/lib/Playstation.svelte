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
  <path d="M0 0h512v512H0" fill="#fff" /><path
    fill="#0070d1"
    d="M77 322c-14 10-9 27 21 36 31 10 64 13 96 7l6-1v-32l-32 10c-13 4-25 5-37 2-9-2-7-8 4-12l65-23v-35l-91 31c-10 4-21 9-32 17Zm216-140v90c39 19 69 0 69-48s-19-72-70-89c-27-9-55-18-82-24v270l64 20V174c0-10 0-18 8-15 10 3 11 13 11 23Zm121 119c-40-14-84-15-125-1l-3 1v36l60-23c13-3 25-4 37-2 9 4 7 10-4 14l-93 35v35l128-48c9-4 19-8 26-16 6-9 3-22-26-31Z"
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
