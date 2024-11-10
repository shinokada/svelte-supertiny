<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'google_maps_old',
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
  <path id="a" d="m0 0H512V512H0" fill="none" /><clipPath id="b"><use xlink:href="#a" /></clipPath
  ><g clip-path="url(#b)"
    ><path fill="#35a85b" d="M0 512V0h512z" /><path fill="#5881ca" d="M256 288L32 512h448z" /><path
      fill="#c1c0be"
      d="M288 256L512 32v448z"
    /><path stroke="#fadb2a" stroke-width="71" d="M0 512L512 0" /><path
      fill="none"
      stroke="#f2f2f2"
      stroke-width="22"
      d="M175 173h50a50 54 0 11-15-41"
    /><path fill="#de3738" d="M353 85a70 70 0 01140 0c0 70-70 70-70 157 0-87-70-87-70-157" /><circle
      cx="423"
      cy="89"
      r="25"
      fill="#7d2426"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'google_maps_old'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
