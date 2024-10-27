<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'sass',
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
  <path d="m0 0H512V512H0" fill="#c69" /><path
    d="M172 408c21-6 48-35 36-73-42 21-56 42-59 59-1 6-2 22 23 14ZM258 88c71-24 152-9 150 47-7 106-169 129-189 79-4-11 3-8 5-4 38 36 146-6 158-68 8-41-55-59-144-14s-94 81-95 95c-2 38 43 54 76 89 57-15 103 5 103 48 0 17-15 27-22 29s-14 0-3-4 27-29-4-51c-8-6-35-16-66-8 14 41-8 80-30 94s-74 29-76-19c-1-35 43-62 78-80-27-21-87-53-93-93S162 121 258 88Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'sass'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
