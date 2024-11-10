<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'freecodecamp',
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
    d="M377 129c-2 0-3 3-3 4 0 3 4 8 11 16 29 28 45 62 44 103 0 46-17 84-47 111-6 6-9 10-9 15l4 4a9 9 0 005 4c7 0 17-8 29-25 25-30 36-63 37-109 0-46-13-77-42-109-10-11-18-17-24-17-2 0-4 1-5 3zm-88 131c-11-2 33-56-47-119 0 0 11 33-42 108-52 75 23 118 23 118s-36-19 7-87c7-11 17-22 29-49 0 0 11 16 5 48-9 50 36 37 37 37 16 18-13 51-14 52s81-51 22-128c-4 5-10 23-21 20zM135 129a7 7 0 013 4c0 3-3 8-12 16A138 138 0 0083 252c0 46 16 82 46 111 7 6 9 11 9 14l-3 5a9 9 0 01-5 4c-8 0-17-9-30-25A165 165 0 0164 252c0-46 13-77 41-109 11-11 19-17 25-17 2 0 4 1 5 3z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'freecodecamp'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
