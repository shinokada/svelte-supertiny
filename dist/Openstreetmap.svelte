<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "openstreetmap",
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="M127 173l61.5 18-18 61.5-61.5-18" fill="#c6e0ad" id="a"/><path d="M336.5 331.5l60 -17-17 60-60 17" fill="#a5d383" id="b"/><use href="#a" x="139.5" y="139.5"/><use href="#b" x="-140"/><use href="#b" x="-140" y="-140"/><use href="#a" x="281" y="-367" transform="rotate(58)"/><use href="#b" transform="rotate(90)" x="-75" y="-502"/><use href="#b" transform="rotate(90)" x="-215" y="-502"/><use href="#a" x="88" y="-323" transform="rotate(58)"/><rect fill="#75570f" stroke="#fff" stroke-width="18" transform="rotate(135)" x="45" y="-405" width="174" height="89" rx="30"/><ellipse stroke="#fff" stroke-width="18" cx="314" cy="195" rx="115" ry=""/><ellipse stroke="#fff" stroke-width="15" cx="314" cy="195" fill="#c6e0ad" rx="82" ry=""/><rect transform="rotate(45)" x="343" y="18" width="35" height="35"/>
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