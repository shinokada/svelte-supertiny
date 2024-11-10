<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'gitea',
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
    d="M108 217c5 39 32 49 64 54-12-35-19-57-22-96-35 0-45 21-42 42Zm311-67c34 1-12 209-75 214H240c-24-3-56-51-59-65-28-1-96-8-99-83-2-48 34-67 61-67 90 3 178 8 276 1Z"
    fill="#592"
  /><path d="m293 152v70" stroke="#fff" stroke-width="9" /><g
    transform="rotate(25.7 496 -423)"
    stroke-width="7"
    fill="#592"
    ><path d="M561 246h97" stroke="#592" /><rect
      x="561"
      y="246"
      width="97"
      height="97"
      rx="16"
      fill="#fff"
    /><path d="M592 245v75" stroke="#592" /><path
      d="M592 273c45 0 38-5 38 48"
      fill="none"
      stroke="#592"
    /><circle cx="592" cy="320" r="10" /><circle cx="630" cy="320" r="10" /><circle
      cx="592"
      cy="273"
      r="10"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'gitea'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
