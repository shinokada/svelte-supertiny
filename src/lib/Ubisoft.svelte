<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'ubisoft',
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
    fill="#fff"
    d="M447 256c1 125-96 199-190 200-94 0-188-64-194-192 0-29 6-57 19-86L67 167a201 201 0 01380 89M110 320c-6-138 146-171 212-77l4-2c-44-137-266-92-221 81l5-2Zm183 5-14-10c26-27 9-74-33-72-34 1-61 37-42 77a52 52 0 0089 5Zm110 2A170 170 0 00285 95c-66-17-136 8-172 65l3 3C252 63 409 193 346 325c-77 127-244 21-159-89l-3-4c-78 49-44 184 73 190 61 1 118-32 146-95Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'ubisoft'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
