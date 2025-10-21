<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><defs
    ><linearGradient id="a" x1=".05" x2="1" y1=".4" y2=".5"
      ><stop offset="0" stop-color="#e54c18" /><stop
        offset="1"
        stop-color="#fec350"
      /></linearGradient
    ></defs
  ><path
    d="m106 414 116-150L103 98h76l95 130-142 186Zm226 0-94-130L380 98h26L290 249l118 165z"
  /><path
    fill="url(#a)"
    d="M351 175c56 22 93 62 93 108 0 69-84 125-188 125S68 352 68 283c0-44 35-83 87-106l10 16c-33 20-54 50-54 84 0 61 71 111 159 111s159-50 159-111c0-42-33-78-82-97Zm-123-15C273 155 303 161 324 166l-4 5c-16-4-33-5-50-5-1 0-14 0-18 7-6 9 12 26 20 45Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
