<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'google_maps',
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
  fill="#fff"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" /><mask id="a"
    ><path
      d="m122 198c0 70 40 105 77 154s40 73 44 83 6 13 13 13 10-3 13-13 7-34 44-83 77-84 77-153a1 1 0 00-268-2m83 0a51 51 0 110 2"
    /></mask
  ><g stroke-width="130" mask="url(#a)"
    ><path stroke="#fbbc04" d="m104 379 152-181" /><path
      stroke="#4285f4"
      d="M256 198L378 53"
    /><path stroke="#34a853" d="m189 459 243-290" /><path stroke="#1a73e8" d="M176 53l79 67" /><path
      stroke="#ea4335"
      d="m76 232 91-109"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'google_maps'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
