<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'olympics',
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
  <path d="m0 0H512V512H0" fill="none" /><g stroke-width="11.4" stroke="#000" fill="none"
    ><circle cx="115.6" cy="226" r="59.1" stroke="#0081c8" /><circle
      cx="256"
      cy="226"
      r="59.1"
    /><circle cx="396.4" cy="226" r="59.1" stroke="#ee334e" /><circle
      cx="185.8"
      cy="286"
      r="59.1"
      stroke="#fcb131"
    /><circle cx="326.2" cy="286" r="59.1" stroke="#00a651" /><path
      d="m162.9 190.5a59.1 59.1 90 010 70.9"
      stroke="#0081c8"
    /><path d="M220.5 273.3A59.1 59.1 90 00256 285.1m47.3-23.6a59.1 59.1 90 000-71" /><path
      d="M360.9 273.3a59.1 59.1 90 0035.5 11.8"
      stroke="#ee334e"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'olympics'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
