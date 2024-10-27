<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'element',
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
  <path d="m0 0H512V512H0" fill="#fff" /><circle cx="256" cy="256" r="192" fill="#0dbd8b" /><path
    d="M195.5 277.1c0 43.8 35.2 81.6 81.6 81.6m0-42.3c43.8 0 81.1-35.2 81.6-81.6m-42.3 0c0-43.8-35.2-81.1-81.6-81.6m0 42.3c-43.8 0-81.1 35.2-81.6 81.6"
    fill="none"
    stroke="#fff"
    stroke-linecap="round"
    stroke-width="28.155"
  />
</svg>
