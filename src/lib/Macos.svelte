<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'macos',
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
    d="M183 245c33 0 53 24 53 64s-21 64-53 64-52-25-52-64 20-64 52-64ZM339 395c62 2 86-66 36-89-21-9-50-8-64-22-33-34 58-61 65-12h23c-4-76-151-54-113 20 6 11 20 20 39 24 121 25-2 102-25 30H276c2 30 27 47 63 49ZM271 190a18 18 0 0012-9v9h10V153c0-22-33-22-41-8a14 14 0 00-2 7h10c3-11 23-10 22 2v4l-14 1c-30 1-26 38 3 31ZM183 395c48 0 77-34 77-86s-30-85-77-85-76 32-76 85 29 86 76 86ZM160 190h10V157l2-5c5.085-8.23 17.553-6.36 20 3v35h11V157c0-16 22-16 22-1v34h11V153c0-21-28-22-35-7-4-14-26-13-31-1v-9H160Zm146-38c-12 41 41 53 47 20H343c-5 18-28 9-28-6 0-27 25-26 28-11h10c-4-26-40-24-47-3Zm-24 18c-5 30-52-4 0-4v4Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'macos'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
