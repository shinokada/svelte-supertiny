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
  <path d="M0 0H512V512H0" fill="#fff" /><path
    fill="#0acf83"
    d="M196 436c33.12 0 60-26.88 60-60v-60H196c-33.12 0-60 26.88-60 60s26.88 60 60 60z"
  /><path
    fill="#a259ff"
    d="M136 256c0-33.12 26.88-60 60-60h60v120h-60c-33.12 0-60-26.88-60-60z"
  /><path
    fill="#f24e1e"
    d="M136 136c0-33.12 26.88-60 60-60h60v120h-60c-33.12 0-60-26.88-60-60z"
  /><path fill="#ff7262" d="M256 76h60c33.12 0 60 26.88 60 60s-26.88 60-60 60h-60V76z" /><path
    fill="#1abcfe"
    d="M376 256c0 33.12-26.88 60-60 60s-60-26.88-60-60 26.88-60 60-60 60 26.88 60 60z"
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
