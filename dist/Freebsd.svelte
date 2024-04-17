<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "freebsd",
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="m420.1 119.5c18 17.9-31.8 96.8-40.2 105.2-8.4 8.4-29.8 0.7-47.7-17.3-18-17.9-25.7-39.3-17.3-47.7 8.4-8.4 87.3-58.2 105.2-40.2M168.4 138.5 168.4 138.5 168.4 138.5c-27.4-15.6-66.4-32.9-78.8-20.4-12.6 12.6 5.4 52.4 21.1 79.9 14-24.3 33.9-44.8 57.7-59.5M392.8 218.6c2.5 8.6 2.1 15.6-2 19.7-9.6 9.6-35.4-0.6-58.7-22.8-1.6-1.5-3.2-3-4.8-4.6-8.4-8.4-15-17.4-19.2-25.6-8.2-14.6-10.2-27.5-4-33.7 3.4-3.4 8.7-4.3 15.3-3.1 4.3-2.7 9.3-5.7 14.9-8.8-22.5-11.7-48.1-18.4-75.2-18.4-90 0-163 73-163 163 0 90 73 163 163 163 90 0 163-73 163-163 0-29.1-7.6-56.3-21-79.9-2.9 5.3-5.7 10.1-8.2 14.2" fill="#ab2b28"/>
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