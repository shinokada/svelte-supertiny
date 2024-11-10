<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'gmail_old',
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
  <path d="m0 0H512V512H0" fill="none" /><path fill="#f2f2f2" d="M120 392V151.075h272V392" /><path
    fill-opacity=".05"
    d="M116 180l4 212L256 285"
  /><path fill="#d54c3f" d="M120 143H75V369c0 13 10 23 22 23h23Z" /><path
    fill-opacity=".08"
    d="M317 392h77V159H82"
  /><path fill="#f2f2f2" d="M97 121h318L256 234" /><path
    fill="#b63524"
    d="M392 392h23c12 0 22-10 22-23V143h-45z"
  /><path
    fill="none"
    stroke="#de5145"
    stroke-linecap="round"
    stroke-width="44"
    d="M97 143l159 115 159-115"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'gmail_old'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
