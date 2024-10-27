<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'jsonfeed',
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
  <path d="m0 0H512V512H0" fill="#8be028" /><g fill="#fff"
    ><ellipse cx="386.53" cy="125.5" rx="27.5" ry="27.5" /><ellipse
      cx="326.53"
      cy="185.5"
      rx="27.5"
      ry="27.5"
    /><ellipse cx="266.53" cy="245.5" rx="27.5" ry="27.5" /></g
  ><path
    d="m118 96s-53.5 42-52.5 87c.6 25.2 22.5 45 39.5 64s41 32 46 59c3 16-10 22-19 35-10.7 15.4 7 32 7 32s16.6 17.7 32 7c13-9 19-22 35-19 27 5 40 29 59 46s38.8 38.9 64 39.5c45 1 87-52.5 87-52.5l-29-29s-23 27-43 27c-45.5-8.6-61.1-59.5-100-77-29-12-45.7 12.6-53 6-6.6-7.3 18-24 6-53-17.5-38.9-68.4-54.5-77-100 0-20 27-43 27-43z"
    fill="#497715"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'jsonfeed'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
