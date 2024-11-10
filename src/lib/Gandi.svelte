<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'gandi',
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
  <path d="m0 0H512V512H0" fill="url(#a)" /><defs
    ><linearGradient id="a" x1="72" y1="512" x2="433" y2="12" gradientUnits="userSpaceOnUse"
      ><stop offset="0" stop-color="#3daca3" /><stop
        offset="1"
        stop-color="#13526b"
      /></linearGradient
    ></defs
  ><path
    fill="#fff"
    d="M255 66a54 54 0 1054 54 54 54 0 00-54-54zm0 71a17 17 0 1117-17 17 17 0 01-17 17zM145 155c13-13 27-5 34 1s26 43 76 43 64-28 80-44c10-11 24-8 33 1s6 25 0 33c-36 49-97 69-116 82-29 20-49 40-49 69 0 24 17 60 53 60s52-25 52-37c0-15-10-19-13-19-15 0-15 18-34 18-15 0-22-12-22-24 0-18 27-42 55-42 38 0 62 27 62 64 0 42-39 88-99 88-65 0-102-61-102-106s21-78 56-101c-26-10-51-27-71-58-2-2-9-16 5-28z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'gandi'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
