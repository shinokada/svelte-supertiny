<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'symfony',
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
  <path d="m0 0H512V512H0" fill="none" /><circle cx="256" cy="256" r="192" /><path
    fill="#fff"
    d="m144 260c7 1 13 7 12 17s-11 14-2 21 30 9 36-9-21-23-29-52 22-58 57-49 35 37 74 42q22 4 36-4 8-4 1-13c-3-5-2-12 7-16s20 6 15 20-30 26-61 21-38-20-53-31-33-15-42-3-1 22 6 29 22 22 22 40-20 44-56 38-41-31-39-39 6-13 16-12m35 91c11 0 17 7 17 17s-10 8-10 15 17 5 28-8 19-32 26-67 8-51 20-89 40-84 81-84 37 32 26 38q-4 2.5-10 2t-10-5-2.3-12c1.3-5 6.3-8 4.3-12s-11-6-21-1-21 17-29 57-12 83-28 123-55 76-89 69-24-43-3-43"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'symfony'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
