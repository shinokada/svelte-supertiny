<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'apereo',
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
    d="M247 96c63 7 107 35 179 22-9 16-22 42-32 46-85 23-123-32-205 10-30 13-68 68-36 125 53 74 129 49 165-19 21 33 6 67 21 99-96 62-228 24-258-80C60 193 134 96 231 96Z"
    fill="#344"
  /><path
    d="M311 191c15 49-14 150 51 224 6-6 17-13 23-17 6 0 29 5 48 15-61-104-30-131-40-226-23 8-53 8-80 4Z"
    fill="#6bc"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'apereo'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
