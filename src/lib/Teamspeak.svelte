<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'teamspeak',
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
    fill="#2580c3"
    d="M407 336c5 5 9 18 9 26s0 15-2 21c0 3-6 33-43 51l-23 8-14 3c-64 12-148-3-84-10l17-2a1532 1532 0 0042-10h1a19086 19086 0 0012-4c16-7 33-16 47-29 10-10 19-22 26-37l6-15c0-2 4-3 6-2zm-60-56c17-3 28 5 29 19 1 13-3 25-13 35-8 9-18 13-32 12a249 249 0 01-40-5c-19-5-26-19-14-30 7-7 16-12 25-16l23-9c7-3 15-5 22-6zm-211-15c3-18 18-26 34-18a1135 1135 0 0142 28 141 141 0 0133 39l1 10c-2 10-9 15-18 19l-13 1h-19l-16-2c-15-1-26-7-34-19a77 77 0 01-10-58zm256-153l3 2c4 4 8 9 3 16l-1 1v2l2 2c16 22 27 46 32 73l2 4 2 1c14 7 21 18 21 33v19l-1 21c-4 20-23 33-42 29-6-1-7-6-7-11a11534 11534 0 010-66 150 150 0 00-300-1v69c0 6-4 9-10 9-24 1-40-14-40-38v-27l1-10c2-12 8-21 19-27h1l1-1c2-1 3-3 3-5 5-26 15-50 30-71l2-3v-5c-3-4-1-7 1-11h1c22-25 48-43 80-53 75-23 141-7 197 48z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'teamspeak'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
