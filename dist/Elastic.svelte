<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "elastic",
  class: classname,
  withEvents = ctx.withEvents || false,
  title = {},
  desc = {},
  ...restProps
} = $props();
let ariaDescribedby = $state(`${title.id || ""} ${desc.id || ""}`);
let hasDescription = $state(false);
$effect(() => {
  if (title.id || desc.id) {
    hasDescription = true;
  } else {
    hasDescription = false;
  }
});
</script>

{#snippet svgContent()}
  <path d="m0 0H512V512H0" fill="#fff"/><path d="m206.4 217.2 90.1 40.3 90.9-78.1A101.6 99.7 0 0 0 203.9 103.4l-15.1 76.9z" fill="#ffd00a"/><path d="m113.1 310.8a103.4 101.4 0 0 0-2 19.9 101.9 99.9 0 0 0 186.1 56.2l15-76.7-20-37.5-90.5-40.4z" fill="#20b9af"/><path d="m112.6 157.9 61.7 14.3 13.5-68.9a48.8 47.8 0 0 0-75.2 54.6" fill="#ee5096"/><path d="m107.2 172.3a68.1 66.8 0 0 0-3 125.8l86.6-76.8-15.9-33.3z" fill="#12a5df"/><path d="m313.1 386.9a48.7 47.8 0 0 0 75.1-54.5l-61.7-14.2z" fill="#90c640"/><path d="m325.6 302.4 67.9 15.6a68.7 67.4 0 0 0 46.8-63.4 68 66.7 0 0 0-43.9-62.3l-88.8 76.4z" fill="#05799f"/>
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
  {#if title.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc.id && desc.desc}
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
  {#if title.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  {@render svgContent()}
  </svg>
{/if}