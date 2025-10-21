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
  stroke-width="20"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="#231f20" /><path stroke="#f1796e" d="M78 241h64m0 26h-64" /><path
    stroke="#ec2529"
    d="M142 293H78m0 26h64m0 26H78"
  /><path stroke="#f6dd05" d="M148 293h64m0 26h-64m0 26h64" /><path
    stroke="#e78dcc"
    d="M218 189h64m0 26h-64m0 26h64m0 26h-64"
  /><path stroke="#d81996" d="M218 293h64m0 26h-64m0 26h64" /><path
    stroke="#d6e465"
    d="M288 241h64m0 26h-64"
  /><path stroke="#adda1a" d="M288 293h64m0 26h-64m0 26h64" /><path
    stroke="#b0d8e6"
    d="M358 163h64m0 26h-64m0 26h64m0 26h-64m0 26h64"
  /><path stroke="#56bbe9" d="M358 293h64m0 26h-64m0 26h64" />
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
