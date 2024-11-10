<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'vlc',
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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#f7901e"
    ><path
      d="M437 400a29 29 0 01-27 40H102c-16 0-29-13-29-29 0-4 0-8 2-11l36-94c3-10 13-16 23-16H378c10 0 20 6 23 16l36 94Z"
    /><path
      d="M256 183c24 0 46-2 63-6l20 65c-20 8-49 13-83 13s-63-5-83-13l19-65c18 4 40 6 64 6Zm43-74a307 307 0 01-86 0l15-51c3-11 13-18 24-18h8c11 0 21 7 24 18l15 51Z"
    /></g
  ><g fill="#f2f2f2"
    ><path d="m319 177-20-68a307 307 0 01-86 0l-21 68c18 4 40 6 64 6s46-2 63-6z" /><path
      d="M173 242c20 8 49 13 83 13s63-5 83-13l18 62c-19 14-55 23-101 23s-82-9-101-23l18-62Z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'vlc'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
