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
  <path d="M0 0h512v512H0z" fill="#fff" /><path
    fill="#4285f4"
    d="M349 170H200c-13 0-23 10-23 23v24h181c13 0 23 10 23 23v-38c0-18-14-32-32-32z"
  /><path
    fill="#34a853"
    d="M162 170c-18 0-32 14-32 32v81c0 13 10 23 23 23h24V193c0-13 10-23 23-23h-38z"
  /><path
    fill="#fbbc04"
    d="M162 353h149c13 0 23-10 23-23v-24H153c-13 0-23-10-23-23v38c0 18 14 32 32 32z"
  /><path
    fill="#ea4335"
    d="M349 353c18 0 32-14 32-32v-81c0-13-10-23-23-23h-24v113c0 13-10 23-23 23h38z"
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
