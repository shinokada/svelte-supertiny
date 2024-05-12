<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "visualstudiocode",
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
  <path d="m0 0H512V512H0" fill="#fff"/><filter id="a"><feFlood flood-opacity="0" result="b"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feGaussianBlur stdDeviation="4"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0"/><feBlend in2="b" result="c"/><feBlend in="SourceGraphic" in2="c"/></filter><path fill="#27b" d="m423 114-75-37a23 23 0 0 0-26 5L77 306a15 15 0 0 0 0 22l20 18a15 15 0 0 0 20 1l295-224c10-7 24-1 24 12v-1c0-9-5-17-13-20"/><path fill="#08c" d="m423 399-75 36a23 23 0 0 1-26-5L77 207a15 15 0 0 1 0-22l20-19a15 15 0 0 1 20-1l295 224c10 8 24 1 24-12v1c0 9-5 17-13 21" filter="url(#a)"/><path fill="#19f" d="M348 435a23 23 0 0 1-26-5c9 9 23 3 23-9V92c0-12-14-19-23-10a23 23 0 0 1 27-4l75 36c7 3 12 11 12 20v244c0 9-5 17-12 21"/>
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
@prop ariaLabel =  "visualstudiocode"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
