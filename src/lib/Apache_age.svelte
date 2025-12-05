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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs
    ><linearGradient id="g"
      ><stop offset="0" stop-color="#1a367f" /><stop
        offset="1"
        stop-color="#b9125a"
      /></linearGradient
    ></defs
  ><path d="m0 0H512V512H0" fill="url(#g)" /><path
    fill="#fff"
    d="M154 205l74 170H208l-13-31-85 31H82l72.072-170m34 123.5L154 250 109 357m139.452 2.07s.91-.04 6.74-.79c21.54-2.78 41.34-13.97 52.37-32.81 5.08-8.68 7.96-24.47 7.96-24.47l-79.36 28.52-6.55-14.75L317 282h16v12c-.22 42.3-31.78 79.29-78.22 80.84M346 357h92v18H327c10-8 10-8 19-18m6-75h86v18H352m-45.03-45.16c-33.04-36.55-72.31-34.53-105.81-7.61l-7.77-16.3c34.94-26.4 76.75-33.75 123.44 8.54M327 208H438v18H346c-8-10-8-10-19-18"
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
