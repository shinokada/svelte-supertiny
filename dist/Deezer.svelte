<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "deezer",
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
  <path d="m0 0H512V512H0" fill="#231f20"/><path stroke="#f1796e" d="M78 241h64m-64 26h64"/><path stroke="#ec2529" d="M78 293h64m-64 26h64m-64 26h64"/><path stroke="#f6dd05" d="M148 293h64m-64 26h64m-64 26h64"/><path stroke="#e78dcc" d="M218 241h64m-64 26h64m-64-52h64m-64-26h64"/><path stroke="#d81996" d="M218 293h64m-64 26h64m-64 26h64"/><path stroke="#d6e465" d="M288 241h64m-64 26h64"/><path stroke="#adda1a" d="M288 293h64m-64 26h64m-64 26h64"/><path stroke="#b0d8e6" d="M358 241h64m-64 26h64m-64-52h64m-64-26h64m-64-26h64"/><path stroke="#56bbe9" d="M358 293h64m-64 26h64m-64 26h64"/>
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
@prop ariaLabel =  "deezer"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
