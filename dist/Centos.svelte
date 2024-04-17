<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "centos",
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
  <path d="m0 0H512V512H0" fill="#fff"/><g id="g"><rect x="118" y="118" fill="#9ccd2a" width="124" height="124"/><rect x="270" y="118" fill="#932279" width="124" height="124"/><rect x="270" y="270" fill="#efa724" width="124" height="124"/><rect x="118" y="270" fill="#262577" width="124" height="124"/></g><use xlink:href="#g" transform="rotate(225 256 256)"/><path fill="none" stroke="#fff" stroke-width="9" d="m236 256-87 88-88-88 88-88zm6-14H118V118H242zm0 28V394H118V270zm14-34-88-87 88-88 88 88zm0 40-88 87 88 88 88-88zm14-34V118H394V242zm0 28H394V394H270zm6-14 87 88 88-88-88-88z"/>
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