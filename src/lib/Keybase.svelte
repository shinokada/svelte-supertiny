<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'keybase',
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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#282828"
    ><path
      d="m201 80 22-31 18 10c-9 18-8 24-8 26 8-3 81 10 59 80 0 0 44 12 76 57 29 39 11 104-57 84-58-17-111-13-177 40l32-81-79 102c-3-99 10-140 79-190-23-1-41-18-40-38l2-27c1-19 17-35 37-34 1-1 36 1 36 2zm36 96c-5-6-15 1-9 7l21 25-10 8c-2 2-3 5-1 7l2 3c3 3 6 0 6 0l10-9 10 10-22 17c-2 2-2 5-1 7l9 11c2 2 5 2 7 1l22-17 6 7c5 6 14-1 9-7zm-50-70-21-2c-5 0-10 4-11 9l-1 27c0 6 4 10 9 10l16 1c-1-6 4-36 8-45z"
    /><circle cx="215" cy="348" r="14" /><circle cx="298" cy="348" r="14" /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'keybase'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
