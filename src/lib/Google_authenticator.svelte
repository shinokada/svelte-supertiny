<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M0 0h512v512H0z" fill="#fff" /><path
    fill="#1A73E8"
    d="M440 256c0 17-14 31-31 31H302l-46-93 50-86c9-15 28-20 43-11s20 28 11 43l-51 86h99c17 0 31 14 31 31z"
  /><path
    fill="#EA4335"
    d="M348 415c-15 9-34 3-43-11l-49-86-50 86c-9 15-28 20-43 11s-20-28-11-43l51-86 54-2 54 2 50 86c9 15 4 34-11 43z"
  /><path fill="#FBBC04" d="M256 194l-14 38-40-7-50-86c-9-15-4-34 11-43s34-4 43 11l50 87z" /><path
    fill="#34A853"
    d="M248 225l-36 62H103c-17 0-31-14-31-31s14-31 31-31h145z"
  /><polygon fill="#185DB7" points="310,287 202,287 256,194" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
