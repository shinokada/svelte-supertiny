<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'guacamole',
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
  <path d="m0 0H512V512H0" /><path
    d="M123 306c47 41 173 67 264 3-52 101-229 85-264-3Zm14-124c-45 50 36 92 114 92 78 1 161-30 136-81l9-7c23 16 16 44 12 57-2 7-3 17-6 26-56 49-197 76-291-2 0 0-2-12-3-26-10-15-15-48 35-73Z"
    fill="#fff"
  /><path
    d="M317 177s9 5 12 6c2 5 2 10 13 15 2 2 3 9 4 16 0 1 22-12 27-15 18 41-70 59-116 60s-118-18-116-53c4-11 9-16 16-31 11-7 15-2 35-22 15-12 26 1 50-15 2-1 8-3 18-3 10 1 6 7 46 7 6 0 17 11 20 12l-9 23Z"
    fill="#583"
  /><path
    d="M334 170c7 3 6 2 9 9s5 0 12 14c35-19 44-30 45-34s-37-31-48-28c-6 6-16 31-18 39z"
    fill="#db4"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'guacamole'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
