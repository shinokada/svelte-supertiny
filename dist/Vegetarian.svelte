<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "vegetarian",
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
  <path d="m0 0H512V512H0" fill="#fff"/><path fill="#0d0" d="m255 64a192 192 0 102 0m0 23a169 169 0 11-2 0m-88 77h28l61 172 61-172h28l-75 204h-28"/>
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
@prop ariaLabel =  "vegetarian"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
