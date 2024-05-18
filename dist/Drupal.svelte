<script lang='ts'>import { getContext } from "svelte";
const ctx = getContext("iconCtx") ?? {};
let {
  onclick,
  size = ctx.size || "24",
  role = ctx.role || "img",
  ariaLabel = "drupal",
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
  <path d="m0 0H512V512H0"/><path fill="#00598e" d="M383 152a175 175 0 1 1-281 203"/><path fill="#0073ba" d="M243 97v-49c26 31 40 47 84 65c21 9 40 21 56 38c19 25 27 97-91 166s-155 72-190 38c-44-79-8-159 9-181"/><path fill="#93c5e4" d="M122 161c-71 102 146-28 115-59 24-16 6-52 6-52V86"/><path d="M221 104c42 7-104 105-105 75 0-15 23-38 40-50s87-29 86-79C242 50 266 88 221 104m1 171c-70 0-100 106-10 106 36 0 86-47 110-47s45 45 62 45c32 0 58-97 12-97-19 0-59 40-75 38C292 316 265 275 222 275m20 142c25 19 79 14 103-4 6-5 3-14-3-9-17 14-74 18-92 2C245 401 231 409 242 417m42-32c6-5 11-13 26-13s20 11 23 14 9-2 6-8-6-17-28-17-30 14-34 17S275 392 284 385"/><path stroke="#004975" fill="none" stroke-width="4" d="M186 113c31-15 53-24 57-65 26 31 40 47 84 65a175 175 0 1 1-141 0"/>
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
@prop ariaLabel =  "drupal"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
