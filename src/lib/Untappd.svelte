<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'untappd',
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
  <path d="m0 0H512V512H0" fill="#ffce0d" /><path
    d="M382 432c38 16 93-21 89-61L358 206l-39-21-88-94-2-7-6-2-1-7c-15 2-26 9-33 23l7 3v6l6 4 58 114 8 43z"
    fill="#734019"
  /><path
    d="M39 371c-2 41 51 80 88 63l116-163 7-44 59-115 6-3-1-7 6-3c-7-14-17-22-32-23l-1 7-6 2-1 7-88 94-37 22z"
    fill="#e17e24"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'untappd'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
