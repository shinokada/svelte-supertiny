<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'freebsd',
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
    d="m420.1 119.5c18 17.9-31.8 96.8-40.2 105.2-8.4 8.4-29.8.7-47.7-17.3-18-17.9-25.7-39.3-17.3-47.7 8.4-8.4 87.3-58.2 105.2-40.2m-251.7 19c-27.4-15.6-66.4-32.9-78.8-20.4C77 130.7 95 170.5 110.7 198c14-24.3 33.9-44.8 57.7-59.5m224.4 80.1c2.5 8.6 2.1 15.6-2 19.7-9.6 9.6-35.4-.6-58.7-22.8-1.6-1.5-3.2-3-4.8-4.6-8.4-8.4-15-17.4-19.2-25.6-8.2-14.6-10.2-27.5-4-33.7 3.4-3.4 8.7-4.3 15.3-3.1 4.3-2.7 9.3-5.7 14.9-8.8-22.5-11.7-48.1-18.4-75.2-18.4-90 0-163 73-163 163s73 163 163 163 163-73 163-163c0-29.1-7.6-56.3-21-79.9-2.9 5.3-5.7 10.1-8.2 14.2"
    fill="#ab2b28"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'freebsd'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
