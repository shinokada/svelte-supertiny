<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'citrix_compact',
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
  <rect height="512" width="512" fill="#fff" />
  <path
    d="M257.4 89.2a1 1 0 010 40.2 1 1 0 010-40.2Zm16.7 168.1 72.1-82.9a1 1 0 00-19-16.6l-69.8 80.3-69.8-80.3a1 1 0 00-19 16.6l72.1 82.9-72.1 82.9a1 1 0 0019 16.6l69.8-80.3 69.8 80.3a1 1 0 0019-16.6Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'citrix_compact'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
