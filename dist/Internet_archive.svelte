<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "internet_archive",
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="m81 419h350v18h-350zm14-34h323v25h-323zm-2-284h321v35h-321zm319-10 10-11-169-39-168 39 10 11h158zm-273 154-1-51-3-47c0-2 0-2-2-2a67 67 0 0 0 -28 0c-1 0-2 0-2 2l-2 47a2223 2223 0 0 0 0 127l2 43 1 8 15 3c6-1 11-1 16-3l1-8 2-43a1616 1616 0 0 0 1-76zm88 0-2-51-2-47c0-2-1-2-2-2a67 67 0 0 0 -28 0c-2 0-2 0-2 2l-3 47a2223 2223 0 0 0 0 127l2 43 1 8c5 2 11 2 16 3l16-3v-8l2-43a1620 1620 0 0 0 2-76zm101 0-1-51-3-47c0-2 0-2-2-2a67 67 0 0 0 -28 0c-1 0-2 0-2 2l-2 47a2223 2223 0 0 0 0 127l2 43 1 8 15 3c5-1 11-1 16-3l1-8 2-43a1624 1624 0 0 0 1-76zm85 0-1-51-2-47c0-2-1-2-2-2a67 67 0 0 0 -29 0l-1 2-3 47a2227 2227 0 0 0 0 127l2 43 1 8c5 2 10 2 16 3l15-3 1-8 2-43a1620 1620 0 0 0 1-76z"/>
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
@prop ariaLabel =  "internet_archive"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
