<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'wayland',
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
  <path d="M0 0h512v512H0" fill="#ffbc00" /><path
    d="M131 128c15 11 22 30 28 49 1 2 8-2 10 0 1 1 1 1 0 2s-8 0-8 1q3 7.5 6 18c4 0 12-2 12 1-3 5-6 6-9 14l3 1c5 32 2 80 20 90 8 5 24-53 33-72l-1-4c5-5 6-12 18-13 13-1 18 22 23 39 7 16 13 30 20 44 3 15 13 28 18 30 8 1 13-26 18-50 5-8 7-18 10-28l-19-3c-2 2-6 1-10 1v-3c11-2 22-1 32-1 7-22 0-12 23-69 3-15 2-37 7-49l15-7c19 0 7 33 6 61 3 0 6-5 7-3-18 19-17 44-23 63-8 32-13 36-13 61l-8 24 10 5c-1 5-3 7-5 8l3 2c1 5-5 4-9 5 1 5 0 6-2 7l8 6v3h-8v3c2-1 5 2 5 5-1 4-9 5-13 6 4 5 0 5-4 5v2c4 0 6 0 6 3-12 4-25 54-43 55-11-4-11-24-14-38l-17-52c1-22-5-32-12-49l-5-28-5-1c-10 16-18 34-21 55l-8 28c7 3 13 5 12 8-5 3-8-2-13-3-8 24-10 68-23 69-15-4-27-16-39-29l-8-20c-3-5-2-12-3-18-6-16-12-37-14-60v-39c-2 1-4 2-6 2 0-4 3-3 5-4l-2-41-8-45c-1-19-5-41 13-49"
    style="fill:#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'wayland'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
