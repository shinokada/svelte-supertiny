<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'matrix',
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
  <path d="m0 0H512V512H0" fill="none" /><g transform="matrix(.52038 0 0 .52038 122.52 122.52)"
    ><path
      d="m25 23v466h34v11H13V11h46v11zm143 148v24h.7c6-9 14-16 23-21s19-7 31-7c11 0 21 2 30 6s16 12 21 23c5-8 12-14 21-20s19-9 31-9c9 0 18 1 26 3s15 6 20 11 10 11 13 19 5 18 5 29v117h-48v-99c0-6-.2-11-.7-17s-2-10-4-13c-2-4-5-7-9-9s-9-3-16-3-12 1-16 4-7 6-10 10c-2 4-4 9-5 14-.8 5-1 11-1 16v97h-48v-98c0-5-.09-10-.4-15-.2-5-1-10-3-14s-5-8-8-10-10-4-17-4c-2 0-5 .5-9 2s-7 3-11 6-6 7-9 12-4 12-4 21v101h-48V173zm320 319V24h-34V13h46v489h-46v-11z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'matrix'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
