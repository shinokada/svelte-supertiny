<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'netbeans',
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
  <path d="m0 0H512V512H0" fill="none" /><path d="M84 157v39H256V58" fill="#a1c535" /><path
    d="M428 157v39H256V58"
    fill="#add439"
  /><path d="M361 196V355h67V157" fill="#1b6ac6" /><path
    d="M256 454V316H361l67 39"
    fill="#2e90e8"
  /><path d="M84 157V355h67V196" fill="#a5073e" /><path
    d="m84 355 67-39 105 61v77"
    fill="#ea205e"
  /><path d="M256 377V196H361V316" fill="#cedbe6" /><path
    d="m151 196 105 60 105-60-105-61"
    fill="#f1f6e2"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'netbeans'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
