<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'angellist',
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
    d="M323 225l-36-7 29-82c4-13 19-56 36-56 23 0 4 49 1 59-8 22-17 52-30 86Zm-39 77c-12 8-23 18-32 30-3-14-8-25-13-38 13 6 30 8 45 8Zm-32-88c-11-2-27-3-37 4-14-34-24-63-31-85-3-11-22-62 4-62 14 0 28 44 32 56l32 87ZM224 354c-19 0-32-18-42-32-12-15-37-47-19-65s36 3 46 20c7 10 50 77 15 77Zm-86-6c-3 3-4 10-4 14 0 26 31 52 55 52 22 0 31-20 27-38 7 1 15 2 20-3 0 17 1 54 27 54 0-7-2-14-4-21a79 79 0 0134-86c13-10 30-13 43-23 0-6-3-12-9-12-28 0-57 0-83-9-20-8-33-44-3-44 24 0 48 2 71 8 19 4 51 9 54 33 9 48-1 99-34 136-38 41-99 52-149 29-34-15-65-51-65-89 0-15 9-36 26-36 21 0 68 73 39 76-23 0-32-28-45-41ZM342 230c14-40 73-170 7-170-35 0-69 119-80 145-9-28-44-156-78-153-70 6-10 123 5 181-7-5-15-8-24-8-18 0-38 22-38 40 0 9 6 20 9 28-29 8-44 27-44 57 1 33 15 62 40 84 41 38 104 46 155 25 62-26 95-89 95-154 0-32-8-71-47-75Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'angellist'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
