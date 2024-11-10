<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'protonmail',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a" x1=".8" y1="1"
    ><stop offset="0" stop-color="#d8cbff" /><stop
      offset="1"
      stop-color="#9d7aff"
    /></linearGradient
  ><radialGradient id="b" cx="1.4" cy="0" r="1.6"
    ><stop offset=".6" stop-color="#6d4aff" /><stop
      offset="1"
      stop-color="#aa8eff"
    /></radialGradient
  ><path
    fill="url(#a)"
    d="M332 395h60a36 36 0 0036-36V124c0-8-8-10-12-7L279 232c-16 13-35 10-48-2L99 119c-7-7-15-2-15 5v60"
  /><path fill="url(#b)" d="M84 183v176a36 36 0 0036 36h235V168l-50 42-74 66s-17 13-36 0" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'protonmail'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
