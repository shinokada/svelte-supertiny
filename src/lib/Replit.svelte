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
    fill="#F5640C"
    d="M256 205.3H146.8c-10.8 0-19.6-8.8-19.6-19.6v-65.2c0-10.8 8.8-19.6 19.6-19.6h90c10.8 0 19.6 8.8 19.6 19.6v104.8z"
  /><path
    fill="#F5640C"
    d="M365.2 307.7H256V205.3h109.2c10.8 0 19.6 8.8 19.6 19.6v65.2c0 10.8-8.8 17.6-19.6 17.6z"
  /><path
    fill="#F5640C"
    d="M236.4 410.1h-89.6c-10.8 0-19.6-8.8-19.6-19.6v-65.2c0-10.8 8.8-19.6 19.6-19.6h109.2v85.2c0 10.8-8.8 19.6-19.6 19.6z"
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
