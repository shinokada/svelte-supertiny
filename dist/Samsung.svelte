<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "samsung",
  class: classname,
  withEvents = ctx.withEvents || false,
  title,
  desc,
  ...restProps
} = $props();
let ariaDescribedby = $state(`${title?.id || ""} ${desc?.id || ""}`);
const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#snippet svgContent()}
  <path d="m0 0H512V512H0" fill="#034ea2"/><path fill="#fff" d="m72 224c-16 0-23 5-22 20 3 12 25 19 27 23v4c0 2-1 4-5 4-4 0-6-3-6-5v-5h-16c-1 16 11 21 22 21 14 0 21-4 21-17 1-19-24-20-26-28v-3c0-1 1-4 5-4 4 0 5 3 5 5v4h15v-4c0-13-12-15-20-15m353 15v33c1 21 39 17 39 0v-20h-17v8h5v11c-1 5-13 5-13 0v-31c0-5 11-5 12 0v5h13v-6c-1-20-39-17-39 0m-160-15c-16 0-23 5-22 20 3 12 25 19 27 23v4c0 2-1 4-5 4-4 0-6-3-6-5v-5h-16c-1 16 11 21 22 21 14 0 21-4 21-17 1-19-24-20-26-28v-3c0-1 1-4 5-4 4 0 5 3 5 5v4h15v-4c0-13-12-15-20-15m-100 1-1 59h15v-53l11 53h15l9-53v53h15l-1-59h-24l-7 45-7-45zm135 0v45c1 11 9 15 21 15 11 0 20-4 20-15v-45h-15v46c0 2-1 4-6 4-4 0-6-2-6-4v-46zm-185 0-11 59h16l8-53 8 53h16l-11-59zm243 0v59h15v-48l15 48h21v-59h-15v47l-13-47z"/>
{/snippet}

{#if withEvents}
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    class={classname}
    {...restProps}
    aria-label={ariaLabel}
    {role}
    viewBox="0 0 512 512"
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    onclick={onclick}
  >
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  {@render svgContent()}
  </svg>
{:else}
  <svg xmlns="http://www.w3.org/2000/svg"
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
  {@render svgContent()}
  </svg>
{/if}

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop onclick
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "samsung"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
