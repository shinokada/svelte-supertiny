<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs
    ><linearGradient id="g" x2="0" y2="1"
      ><stop offset="0" stop-color="#f05f2d" /><stop
        offset="1"
        stop-color="#f8d420"
      /></linearGradient
    ></defs
  ><path d="m0 0H512V512H0" fill="none" /><path
    fill="url(#g)"
    transform="rotate(-8.7, 256, 256)"
    d="M162 406h-26v-26h26m15 0v26h26v-26m15 0v26h26v-26m15 0h116v26H259m0-41h116v-26H259m-15 0v26h-26v-26m-15 0v26h-26v-26m-15 0v26h-26v-26m0-15V114h11v210m4 0V99h11v225m15 0V85h10v239m4 0V107h10v217m15 0V131h10v193m4 0V124h10v200"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
