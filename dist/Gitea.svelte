<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "gitea",
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="M419 150c-98 7-186 2-276-1-27 0-63 19-61 67 3 75 71 82 99 83 3 14 35 62 59 65h104c63-5 109-213 75-214zm-311 67c-3-21 7-42 42-42 3 39 10 61 22 96-32-5-59-15-64-54z" fill="#592"/><path d="m293 152v70" stroke="#fff" stroke-width="9"/><g transform="rotate(25.7 496 -423)" stroke-width="7" fill="#592"><path d="M561 246h97" stroke="#592"/><rect x="561" y="246" width="97" height="97" rx="16" fill="#fff"/><path d="M592 245v75" stroke="#592"/><path d="M592 273c45 0 38-5 38 48" fill="none" stroke="#592"/><circle cx="592" cy="320" r="10"/><circle cx="630" cy="320" r="10"/><circle cx="592" cy="273" r="10"/></g>
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
@prop ariaLabel =  "gitea"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
