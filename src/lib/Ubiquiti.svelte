<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'ubiquiti',
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
  <path d="m0 0H512V512H0" fill="#399cdb" /><path
    d="M400 275v15c0 69-48 123-130 128l-10-6c-2-1-38-22-48-64 14 9 33 15 57 16 66 3 112-25 131-89ZM148 188h18v18H148V188Zm18-27h18v18H166V161Zm-54-18h18v98h18V224h18v39h18V197h18V327c0 61 54 91 54 91-91 0-144-55-144-128V143Zm72-4h18v18H184V139Zm-36-9h18v18H148V130Zm18-18h18v18H166V112ZM400 94V250l-7 23c-14 46-43 73-86 82a147 147 0 003-28V155c0-30 8-61 90-61ZM112 94h18v18H112V94Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'ubiquiti'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
