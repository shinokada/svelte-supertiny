<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'clojure',
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
    d="m446 281s-10 71-104 62A122 122 180 00208 144s-51-34-107 0A191.3 192 180 01446 281"
    fill="#5881d8"
  /><path
    d="m66 235s20-87 110-71a121.4 122 0 00134 201q48 16 103 1A191.5 192 0 0166 235"
    fill="#63b132"
  /><path d="M225 160a100 100.8 0 0191 177c-27-1-52-85-57-104s-15-52-34-73" fill="#90b4fe" /><path
    d="m242 241q-45 84-45 97a101 101 0 011-165q24 10 44 68m6 18q20 76 40 93s-32 12-67-1c-2-27 7-44 27-92"
    fill="#91dc47"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'clojure'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
