<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'gitpod',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a" x1=".79" y1=".16" x2=".21" y2=".84"
    ><stop offset="0" stop-color="#ffb45b" /><stop
      offset="1"
      stop-color="#ff8a00"
    /></linearGradient
  ><path
    d="m237 69a1 1 60 0137 66l-111 64q-5 3-5 9v101q0 6 5 9l88 51q5 3 10 0l88-51q5-3 5-9v-63l-80 45a1 1 0 01-37-66l115-64c34-20 77 5 77 45v111c0 25-13 50-37 63l-101 58c-22 13-49 13-71 0l-101-58c-23-14-36-38-36-63V200c0-26 13-50 36-63"
    fill="url(#a)"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'gitpod'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
