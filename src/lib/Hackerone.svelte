<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'hackerone',
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
    d="M333 200h4c10 1 25 5 26 17a18494 18494 0 010 222l-1 3c-4 9-14 12-23 14H329c-9-2-18-7-21-17V274l-29 19c-7 5-18 2-25-2-9-6-15-15-17-27 0-4 1-9 5-12l74-47c4-3 10-4 17-5ZM174 56h5c10 1 22 5 25 16a116708 116708 0 010 366c-1 10-12 15-21 17H169c-9-1-18-7-20-16V72c2-11 15-15 25-16Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'hackerone'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
