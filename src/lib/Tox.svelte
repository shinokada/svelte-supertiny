<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'tox',
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
  fill="#232323"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" /><g fill="#f0f0f0"
    ><rect height="270" rx="90" width="180" x="166" y="65" /><rect
      height="220"
      rx="18"
      width="294"
      x="109"
      y="207"
    /></g
  ><ellipse cx="256" cy="156" rx="59" ry="56" /><path
    d="M246 324c-18 6-29 21-29 44 0 8 7 14 15 14h48c8 0 15-6 15-14 0-23-11-38-29-44m4-113c-1 12-6 22-12 31 37-22 75-73 49-113"
  /><circle cx="256" cy="297" r="29" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'tox'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
