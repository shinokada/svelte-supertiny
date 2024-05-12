<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "swift",
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
  <path d="M0 0h512v512H0" style="fill:#f05138"/><path fill="#fff" d="m376.2 308.5c0 0 0 0 0 0 .4-1.4.9-2.9 1.2-4.3 15.9-63.2-22.8-137.9-88.3-177.2 28.7 38.9 41.4 86 30.1 127.2-1 3.7-2.2 7.2-3.5 10.6-1.4-1-3.3-2-5.7-3.4 0 0-65.1-40.2-135.7-111.4-1.9-1.9 37.6 56.5 82.5 103.8-21.1-11.9-80-54.7-117.2-88.8 4.6 7.6 10 15 16 22.1 31.1 39.5 71.7 88.2 120.3 125.5-34.2 20.9-82.4 22.5-130.5 0-11.9-5.6-23.1-12.3-33.4-19.9 20.3 32.5 51.7 60.6 89.8 77 45.5 19.5 90.7 18.2 124.4.3l0 0c.2-.1.3-.2.5-.3a109 109 0 004.1-2.3c16.2-8.4 48.1-16.9 65.3 16.5 4.2 8.2 13.1-35.1-19.7-75.5z" />
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
@prop ariaLabel =  "swift"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
