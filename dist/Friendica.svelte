<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "friendica",
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
  <path d="m0 0H512V512H0" fill="#fff"/><defs><linearGradient id="l" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".4" offset="0"/><stop stop-color="#d6d7e8" stop-opacity="0" offset=".3"/><stop stop-opacity="0" offset=".7"/><stop stop-opacity=".4" offset="1"/></linearGradient></defs><rect x="89" y="89" width="334" height="334" rx="50"/><path d="m144 89c-30 0-55 25-55 55v225c0 30 25 55 55 55h225c30 0 55-25 55-55v-225c0-30-25-55-55-55z"/><path d="m144 102c-23 0-42 18-42 42v225c0 23 18 42 42 42h52v-88h108v-67h-108v-81h107.5v-73z" fill="#ffc019"/><path d="m316 102v87h-107v67h107v81h-107v74h160c23 0 42-18 41-42v-225c0-23-18-42-42-42z" fill="#1872a2"/><rect x="89" y="89" width="334" height="334" rx="50" fill="url(#l)"/>
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