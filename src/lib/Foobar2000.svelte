<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'foobar2000',
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
  <path d="m0 0H512V512H0" fill="#1B1817" /><path
    d="m177 54c-71 118-91 194-59 257s97 123 138 158c41-35 106-95 138-158s12-139-59-257l-54 74q-25-4-50 0"
    fill="#fff"
  /><path
    d="m208 327c28 0 25-40-3-78s-68-53-79-37-1 51 19 77 49 38 63 38h96c-28 0-25-40 3-78s68-53 79-37 1 51-19 77-49 38-63 38m-48 39-34 36c-6 6-19 1-12-7l38-43q8-8 16 0l38 43c7 8-6 13-12 7"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'foobar2000'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
