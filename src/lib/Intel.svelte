<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'intel',
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
  <path d="m0 0H512V512H0" fill="none" /><path fill="#0068b5" d="M55.2 173.6h31.5v31.5H55.2" /><path
    d="M56 224.2h30v113.6H56m47.5 0V224.2H133v16.4q11-15 28-18s52.4-9.5 55.4 47v68.2h-30.2v-61q-1-29-26-29s-27-1-27 32v58m151.2 1.2c-40.6 1-51-12-51.6-48V180h30v44.2h21.6v25.7h-21.6v42c.4 15 2 19.5 21.7 19.3m37-40.7c0-9 10.5-23 30-23s30 13 30.3 22.9m0 31.2c-13 16-52 21-60.5-10h89.2v-12c-2-50-49-66.7-82-52.8s-47 57-25 89 74 32.5 99.8 2.2m22.7 20V171.2h30V338"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'intel'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
