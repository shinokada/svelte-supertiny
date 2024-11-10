<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'wordpress',
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
  <path d="m0 0H512V512H0" fill="#05a8da" /><path
    d="m109 191a160 159 90 0077 210Zm227 162q30-86 29-109t-22-54c-19-33 4-54 21-53a160 161 90 00-243 31q28 0 53-2a6 6 90 013 13l-19 2 58 174 35-106-25-69-16-1a3 3 90 010-13q42 4 84 0a3 3 90 013 13l-19 1zm-77-83-49 140a167 164 90 0099-2Zm128-19q15-40 10-72a163 165 90 01-60 216zM257 449a193 193 90 10-2 0zm-2-11a182 182 90 112 0Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'wordpress'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
