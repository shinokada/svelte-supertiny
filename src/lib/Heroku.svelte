<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'heroku',
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
  fill="#409"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" /><path
    d="M367 99H145c-22 0-30 8-30 30v254c0 22 8 30 30 30h222c22 0 30-8 30-30V129c0-22-9-30-30-30"
    stroke="#fff"
    stroke-width="16"
  /><path
    fill="#fff"
    d="M182 284c56-28 94-31 107-25 9 4 9 15 9 15v99h33V273s-1-32-27-44-62-1-88 6v-95h-34m124 54s22-22 25-54h-34c-5 29-25 54-25 54m-90 178l37-33-37-33"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'heroku'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
