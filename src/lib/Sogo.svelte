<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'sogo',
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
    fill="#50bd37"
    d="M400 204a1 1 0 000 20 1 1 0 000-20Zm0-10a1 1 0 010 40 1 1 0 010-40Zm0-10.5a1 1 0 000 61 1 1 0 000-61m0-11a1 1 0 010 83 1 1 0 010-83M301 366c20 0 31-10 31-21s-11.3-22.9-34-20c-4.3.5-13 0-17-3 0 0-13 7-13 21 0 13 12 23 33 23M268 251a32 35 0 0065 0 32 33 0 00-65 0Zm32 61c11.4-1.8 45 2 45 33a45 35 0 01-90-2c-.4-12.6 6.1-24.5 17-31-4-12 5-20 5-20.5a45.5 46 0 1119 6.5c-5 0-12 3-12 8s4.6 7.8 16 6ZM194 286a34 34.5 0 000-69 33 34.5 0 000 69Zm0-80a46 45 0 010 91 46 45 0 010-91M82 230c0 23 51 7 51 40 0 19-17 27-34 27-13 0-25-4-33-17a1 1 0 0110-7c5 7 13 13 23 13s20-4 20-14c0-22-50-8-50-40 0-17 16-26 32-26 12 0 23 6 29 16a1 1 0 01-11 7c-3-5-8-12-19-12-8 0-18 4-18 13Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'sogo'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
