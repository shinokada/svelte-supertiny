<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'bun',
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
    d="m150 139c50-27 78-51 102-51s52 24 102 51a182 145 0 11-204 0z"
    fill="#fbf0df"
    stroke="#000"
    stroke-width="12"
  /><path d="m126 356a199 167 9 00298-126A176 139 0 01126 356" fill="#f6dece" /><path
    d="m224 114q-18 36-54 46 44 0 54-46zm15-7q0 38-29 64 39-16 29-64zm11-1q19 30 9 69 24-36-9-69zm14-1q31 24 35 60 9-42-35-60z"
    fill="#ccbea7"
    stroke="#ccbea7"
    stroke-width="3"
    stroke-linejoin="round"
  /><path d="m175 264a29 17 0 102 0h150a29 17 0 102 0" fill="#febbd0" /><path
    d="m190 219a28 28 0 101 0h123a28 28 0 101 0m92-45A190 151 1 11111 359q249 122 325-93"
  /><path
    d="m76 265c31-108 86-116 109-130s54-40 82-38c-30-11-57 16-101 40s-90 57-90 128m105-37a10 10 0 101 0h123a10 10 0 101 0"
    fill="#fff"
  /><g stroke="#000"
    ><path d="M284 292c10 0-8 35-32 37-24-2-42-37-32-37Z" fill="#b71422" stroke-width="6" /><path
      d="m229 316a31 31 0 0149-3q-25 30-49 3"
      fill="#ff6164"
      stroke-width="5"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'bun'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
