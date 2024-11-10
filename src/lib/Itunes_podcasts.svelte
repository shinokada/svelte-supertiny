<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'itunes_podcasts',
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
  <path d="m0 0H512V512H0" fill="url(#t)" /><defs
    ><linearGradient id="t" y1="100%" x2="0"
      ><stop stop-color="#832bc1" offset="0" /><stop
        offset="1"
        stop-color="#f452ff"
      /></linearGradient
    ></defs
  ><path
    d="M252 139A97 97 0 00189 308c2 1 3 4 3 6v20c0 2-2 4-4 3a121 121 0 11136-1c-2 2-4 0-4-2l1-20c-1-2 0-5 2-6A98 98 0 00252 139Zm4-82a180 180 0 0160 350c-2 0-4-1-4-3l3-18c0-3 2-4 4-5a157 157 0 10-126 0c2 1 4 2 4 5l3 18c0 2-2 3-4 3A180 180 0 01256 57ZM214 222a42 42 0 0184 0 42 42 0 11-84 0Zm79 72c4 5 6 9 7 15A891 891 0 01286 435c-3 9-13 18-30 18-16 0-27-9-30-18a891 891 0 01-13-87c-1-17-2-27-1-39 1-6 3-10 7-15 8-8 21-13 37-13s29 5 37 13Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'itunes_podcasts'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
