<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'tailwindCss',
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
    d="m377 248c-38 5-71-3-98-29-8-7-15-15-22-22-27-25-60-25-86 1-2 2-5 4-8 7 5-35 37-66 71-72 44-7 81 4 112 37 5 6 11 11 17 16 25 22 57 21 81-2 3-3 5-6 9-11-6 41-39 71-77 75zM71 302c21-44 62-57 105-52 27 3 48 15 67 33 6 6 12 12 18 18 26 25 59 25 86 0 2-2 3-4 9-12-1 8-2 10-2 12-10 38-44 63-84 66-37 2-69-8-95-36-7-7-14-14-21-20-25-21-57-19-80 3-3 3-6 5-10 9 2-7 4-14 7-21z"
    fill="#45A8B3"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'tailwindCss'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
