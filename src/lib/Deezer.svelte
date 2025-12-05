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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0h512v512H0" fill="#fff" /><path
    d="M91 244c6 0 10-18 10-41s-4-41-10-41-10 19-10 41 5 41 10 41M374 151c-6-32-14-53-24-53s-21 30-26 73c-4-31-11-51-19-51s-20 39-23 94c-7-28-16-46-26-46s-20 18-27 46c-3-55-12-94-23-94s-15 20-19 51c-5-43-15-73-26-73s-18 21-24 53q-5-29-13-30c-10 0-18 41-18 91s8 91 18 91q6-1 11-18c5 42 14 71 26 71s16-17 22-45c3 53 12 90 23 90s13-15 17-39c5 50 18 85 33 85s27-35 32-85q7 37 17 39c10 2 20-37 23-90q10 44 22 45c12 1 22-29 26-71q5 17 11 18c10 0 18-41 18-91s-9-91-18-91q-9 2-13 30M420 244c5 0 10-18 10-41s-5-41-10-41-10 19-10 41 4 41 10 41"
    fill="#a238ff"
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
