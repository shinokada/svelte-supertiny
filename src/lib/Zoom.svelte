<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M0 0h512v512H0" fill="#0b5cff" /><path
    fill="#fff"
    d="M145 301H76q-7 0-11-6-3-8 3-14l47-47H81q-15-2-17-17h63q7 1 11 7 3 7-2 13l-48 47h40q15 2 16 17m270-85q-15 0-25 11a33 33 0 0 0-57 22v52q15-1 17-17v-35q1-15 15-16c9-1 17 7 17 16v35q1 16 17 17v-52q1-15 15-16c9-1 17 7 17 16v35q2 16 17 17v-52c0-18-15-33-33-33m-185 43c0 24-19 43-44 43-24 0-43-19-43-43s19-43 43-43c25 0 44 19 44 43m-17 0a26 26 0 1 0-53 1 26 26 0 0 0 53-1m111 0c0 24-19 43-44 43-24 0-43-19-43-43s19-43 43-43c25 0 44 19 44 43m-17 0a26 26 0 1 0-53 1 26 26 0 0 0 53-1"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
