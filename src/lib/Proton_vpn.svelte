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
  <path d="m0 0H512V512H0" fill="none" /><defs
    ><linearGradient
      id="a"
      x1="830.5"
      x2="239.72"
      y1="783.55"
      y2="-235.27"
      gradientTransform="matrix(.35 0 0 .35 94.92 109.57)"
      gradientUnits="userSpaceOnUse"
      ><stop stop-color="#8EFFEE" offset=".07" /><stop stop-color="#C9C7FF" offset=".45" /><stop
        stop-color="#7341FF"
        offset="1"
      /></linearGradient
    ><linearGradient
      id="b"
      x1="884.54"
      x2="57.24"
      y1="-908.44"
      y2="861.08"
      gradientTransform="matrix(.35 0 0 .35 94.92 109.57)"
      gradientUnits="userSpaceOnUse"
      ><stop stop-color="#6D4AFF" offset=".48" /><stop
        stop-color="#00F0C3"
        offset=".99"
      /></linearGradient
    ></defs
  ><path
    d="M224.39 384.49c12.24 22 43.68 23.2 57.58 2.18l129.6-195.98c13.75-20.78.6-48.64-24.3-51.48l-254.73-28.98c-27.16-3.1-46.5 25.55-33.3 49.3z"
    fill="url(#a)"
  /><path
    d="m231.7 363.96 11.5-17.16 87.37-131.98c7.64-11.54.35-27.01-13.47-28.6l-216.83-24.9 112.32 201.94a11.26 11.26 0 0 0 19.1.7z"
    fill="url(#b)"
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
