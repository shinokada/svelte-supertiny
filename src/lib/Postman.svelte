<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'postman',
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
  <path d="M0 0h512v512H0" fill="#fff" /><circle cx="256" cy="256" r="192" fill="#ff6c37" /><g
    fill="#fff"
    ><path
      d="m203 268 30-7-13-13zm144-132a29 29 0 1 0 12 55l-20-20v-3l26-26a29 29 0 0 0-18-6"
    /><path
      d="m368 146-24 24 19 18 4-3a29 29 0 0 0 1-39m-48 44h-3l-1 1h-1l-1 1-71 71 9 9 75-66 1-1 1-3 1-1v-4a9 9 0 0 0-8-7zm-95 55 14 15 71-71q4-3 9-4c-13-10-26-7-94 60m106-36-1 1-75 66 13 12c31-30 59-58 63-79M144 363l33 3-18-19zm18-19 19 19 1 1 1-1 1-1-3-14a4 4 0 0 1 2-5q51-25 81-52l-13-13-29 6zm84-70-7-7-10 10 1 1z"
    /></g
  ><path
    fill="#ff6c37"
    d="M368.9 161.3a2.2 2.2 0 1 0-4 2 7 7 0 0 1-.8 7.2 2.2 2.2 0 0 0 3.4 2.8 11 11 0 0 0 1.4-12"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'postman'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
