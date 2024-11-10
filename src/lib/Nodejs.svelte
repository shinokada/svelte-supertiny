<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'nodejs',
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
    fill="#539E43"
    d="M247 281q3 0 4 2c2 3-2 27 34 30s57-2 60-18-4-21-60-27-56-33-56-42 0-49 68-49 70 40 71 47 0 9-4 9H346q-4 0-5-5c-3-12-9-25-44-25s-39 11-39 22 11 13 47 18 65 9 69 39-16 58-71 58q-79 0-79-54 0-5 5-5M417 145q16 9 16 29V340q0 18-14 27L273 452q-16 8-32 0l-49-29q-8-4-2-6 13-4 22-10 2-1 4 0l37 22q3 2 6 0l145-84q2-1 2-5V172q0-3-2-4L259 84q-3-2-6 0L107 168q-2 1-2 4V341q0 3 2 4l40 23c16 9 35 3 35-15V188q0-6 6-6h16q6 0 6 6V353c0 49-45 55-77 37L94 368q-15-9-15-27V172q0-18 16-27L237 63q19-12 38 0"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'nodejs'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
