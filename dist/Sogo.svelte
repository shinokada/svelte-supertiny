<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "sogo",
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
  <path d="m0 0H512V512H0" fill="#fff"/><path fill="#50bd37" d="M82 230c0-9 10-13 18-13 11 0 16 7 19 12a1 1 0 0011-7c-6-10-17-16-29-16-16 0-32 9-32 26 0 32 50 18 50 40 0 10-10 14-20 14s-18-6-23-13a1 1 0 00-10 7c8 13 20 17 33 17 17 0 34-8 34-27 0-33-51-17-51-40zm112-24a46 45 0 000 91 46 45 0 000-91m0 80a33 34.5 0 010-69 34 34.5 0 010 69zm106 26c-11.4 1.8-16-1-16-6s7-8 12-8a45.5 46 0 10-19-6.5c0 .5-9 8.5-5 20.5-10.9 6.5-17.4 18.4-17 31a45 35 0 0090 2c0-31-33.6-34.8-45-33zm-32-61a32 33 0 0165 0 32 35 0 01-65 0zm33 115c-21 0-33-10-33-23 0-14 13-21 13-21 4 3 12.7 3.5 17 3 22.7-2.9 34 9 34 20s-11 21-31 21m99-193.5a1 1 0 000 83 1 1 0 000-83m0 11a1 1 0 010 61 1 1 0 010-61m0 10.5a1 1 0 000 40 1 1 0 000-40zm0 10a1 1 0 010 20 1 1 0 010-20z"/>
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
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop onclick
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "sogo"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
