<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "homekit",
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="M113 406V218c0-6-5-11-11-11H82L256 69l104 82c8 5 18 0 18-9v-25h15v55a11 11 0 004 8l34 27h-21c-6 0-11 5-11 11v188zM127 173c-7 5-14 14-14 29v177c0 15 9 25 24 25h238c15 0 24-10 24-25V202c0-15-7-24-14-29L271 83c-10-6-22-6-30 0zm47 171V217c0-4 1-5 2-6l80-63 80 63c1 1 2 1 2 6v127zM242 159l-58 46c-9 7-9 15-9 20v97c0 12 8 20 19 20h124c11 0 19-8 19-20v-97c0-5 0-13-9-20l-58-46c-8-6-20-6-28 0zM228 289v-49l28-21 28 21v49zm28-66c-4 0-6 2-10 5l-11 9a16 16 0 00-6 11v26c0 8 6 13 13 13h28c7 0 13-6 13-13v-26a16 16 0 00-6-11l-10-9c-4-3-7-5-11-5" stroke="#000" stroke-width="22" stroke-linejoin="round"/>
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