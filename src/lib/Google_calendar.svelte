<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'google_calendar',
    class: classname,
    title,
    desc,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
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
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M100 135q0-35 37-35H340v74H174V340H100"
    fill="#4285f4"
  /><path d="m338 100v76h74v-41q0-35-35-35" fill="#1967d2" /><path
    d="m100 338v39q0 35 35 35h41v-74"
    fill="#188038"
  /><path d="M348 338H174v74H338" fill="#34a853" /><path
    d="m338 339V174h74V338"
    fill="#fbbc04"
  /><path d="M338 412v-74h74" fill="#ea4335" /><path
    d="m204 229a25 22 1 1125 27h-9 9a25 22 1 11-25 27m66-52 27-19h4v96"
    stroke="#4285f4"
    stroke-width="15"
    fill="none"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'google_calendar'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
