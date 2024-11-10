<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'nhs',
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
  <path d="m0 0H512V512H0" fill="#005EB8" /><path
    fill="#FFF"
    d="M448 333V178H64v155zM218 193l-26 125h-42l-26-86-18 86H75l27-125h41l26 87 18-87zm119 0-26 125h-33l11-54h-40l-11 54h-33l26-125h33l-10 48h40l10-48zm97 4-8 24c-7-3-16-5-28-5-13 0-24 2-24 12 0 17 49 11 49 49 0 34-33 43-62 43-13 0-27-3-38-7l8-25c6 4 19 7 30 7s27-2 27-15c0-19-48-12-48-47 0-32 28-42 55-42 16 0 30 2 39 6"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'nhs'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
