<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'evernote',
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
  <path d="m0 0H512V512H0" fill="#46c850" /><path
    d="m157 143q3 0 3-4l-1-38q0-9 6-19h-1L96 149v1q12-7 25-7zm235-6q-5-21-20-25-52-13-98-11-2-29-54-29-50-2-49 29v39q0 13-14 13H123q-9 0-18 4-14 6-14 30c-1 19 13 95 23 115 3 9 6 12 14 15q21 10 73 18c17 2 28 6 36-8q10-28 9-52a1 1 0 012 0q-1 37 19 43l45 9q29 0 28 49c0 25-6 28-34 28-22 0-30 1-30-17q0-15 25-13c4 0 1-3 1-12s5-14 0-14c-36-1-58 0-58 45 0 42 16 49 68 49 40 0 55-1 71-52q30-105 9-253zm-46 115c-5-6-31-8-40-4 2-10 6-22 22-22 15 0 18 16 18 26z"
    fill="#4b4b4b"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'evernote'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
