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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M0 0h512v512H0z" fill="#fff" /><path
    fill="#ea4335"
    d="M264 56c-4 0-6 3-6 7v51c79 0 143 64 143 144h51c3 0 7-3 7-7 0-105-90-195-195-195Z"
  /><path
    fill="#fbbc04"
    d="M251 459c3 0 7-3 7-7v-51a143 143 0 0 1-144-143H63c-4 0-7 2-7 6 0 105 90 195 195 195z"
  /><path fill="#1e8e3e" d="M258 401v-83c-34 0-61-27-61-60h-83c0 79 64 143 144 143z" /><path
    fill="#5bb974"
    d="M401 258h-83c0 33-27 60-60 60v83c79 0 143-64 143-143z"
  /><path fill="#1967d2" d="M258 114v83c33 0 60 27 60 61h83c0-80-64-144-143-144z" /><path
    fill="#669df6"
    d="M258 114a143 143 0 0 0-144 144h83c0-34 27-61 61-61z"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
