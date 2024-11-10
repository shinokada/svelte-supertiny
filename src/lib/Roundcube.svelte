<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'roundcube',
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
    d="m256 107.6v340.6l192-111V218.7z"
    fill="#37beff"
  /><path d="m256 107.6L64 218.7v118.5l192 111.1z" fill="#404f54" /><path
    d="m256 63.7c-73.3 0-132.8 59.6-132.8 133 0 24.2 6.5 46.9 17.7 66.4L256 329.7z"
    fill="#ccc"
  /><path
    d="m256 63.7c-42.1 28.4-59.5 85.7-59.5 133.1s17.4 104.5 59.5 132.9l115.1-66.6a132.5 132.5 0 0017.7-66.4c0-73.4-59.5-133-132.9-133z"
    fill="#e5e5e5"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'roundcube'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
