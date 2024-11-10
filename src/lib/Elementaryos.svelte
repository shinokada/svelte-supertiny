<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'elementaryos',
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
  <path d="m0 0H512V512H0" fill="none" /><circle
    cx="256"
    cy="256"
    r="180"
    stroke-width="16"
    stroke="#000"
    fill="none"
  /><path
    d="M123 365c129-29 220-136 206-203-14-65-93-72-149-18-59 58-58 164 0 203 91 61 192-18 247-113-1-12-2-16-5-25-57 108-149 165-219 127-68-37-52-133-11-181 63-73 136-23 119 46-7 28-60 125-201 146-1 7 6 20 13 18z"
    fill="#000"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'elementaryos'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
