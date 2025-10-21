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
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#4a90d8"
    d="M256 80c-8.1 0-16.1 2.1-23.4 6.2l-110.6 63.8a46.8 46.8 0 0 0-23.4 40.4v126.3a46.8 46.8 0 0 0 23.4 40.4l110.6 63.8a46.8 46.8 0 0 0 46.8 0l110.6-63.8a46.8 46.8 0 0 0 23.4-40.4V190.4a46.8 46.8 0 0 0-23.4-40.4L279.4 86.2A46.6 46.6 0 0 0 256 80m0 30.4c2 0 4.1.5 5.9 1.6l110.8 63.8a13 13 0 0 1 6.4 6.4L256 256v139.2a13 13 0 0 1-6.4-1.7L138.8 329.7a13 13 0 0 1-6.4-11v-126.3c0-2 0.5-4.1 1.6-5.9L256 256Z"
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
