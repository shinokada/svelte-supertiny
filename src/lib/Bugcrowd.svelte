<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'bugcrowd',
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
    fill="#f26922"
    d="M258 236.4c11.5-2.7 26.3 2.1 35.2 11.4 17.6 18.7 17 59.9-1.4 77.9-8.8 8.8-17.5 11.7-31.3 10.7-21.4-1.5-35.8-21.1-36-49.1-.4-28.2 11.2-45.7 33.5-50.9Zm-40.8-91.7c-5-3.1-8.7-3.6-27.2-4-11.8-.1-22.5.2-23.7.9-1.3.8-2 5.9-1.8 17v15.8l8.8.9c4.8.5 9.4 1.5 10 2.2.7.6 1.2 43.6 1.2 95.5v94.3h38.6V349.2l6.5 5.9c3.4 3.2 10.5 8 15.6 10.4 8.3 3.9 11.6 4.4 28.1 4.4 17.5 0 19.3-.3 30.2-5.4 33-15.7 49.5-54.6 42.2-99.3-3.4-20.1-15.6-41.7-29.1-51.2-13.1-9.2-23.4-12.2-41.6-12.2-15-.2-18.2.3-26.6 4.2-5.2 2.6-12.5 7.3-16.3 10.7l-6.8 6.2V191.7c0-38.7-.5-42.3-8.1-47ZM145.6 66.5H365.1L474.2 260.4 365.1 445.5H145.6L38.5 260.4Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'bugcrowd'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
