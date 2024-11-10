<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'google_drive',
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
    d="m126 417q9 5 19 5H367q9 0 19-5V313H99"
    fill="#4285f4"
  /><path d="m196 87q9-5 20-5h80q12 0 20 5v104h-68" fill="#188038" /><path
    d="m66 313q0-10 5-19l110-191q6-11 15-16l60 104-72 125"
    fill="#34a853"
  /><path d="M316 87q10 6 15 16L438 289q8 12 8 24l-118 3-72-125" fill="#fbbc04" /><path
    d="m185.714 313H66q0 8 3 15l40 70q7 13 17 19"
    fill="#1967d2"
  /><path d="m386 417q9-5 16-17l38-66q6-10 6-21H326.3" fill="#ea4335" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'google_drive'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
