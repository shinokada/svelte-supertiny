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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M0 0h512v512H0" fill="#fff" /><g fill="#fd366e"
    ><path
      d="M419.3 326.41v73.47H232.61c-54.39 0-101.88-29.55-127.29-73.47-3.69-6.39-6.93-13.08-9.63-20.04-5.34-13.62-8.67-28.23-9.69-43.5v-19.86c.21-3.39.57-6.78 1.02-10.11.93-6.84 2.34-13.53 4.17-20.04C108.65 151.18 165.35 106 232.61 106s123.96 45.18 141.42 106.86H294.2c-13.11-20.1-35.79-33.39-61.59-33.39s-48.48 13.29-61.59 33.39c-3.99 6.12-7.08 12.87-9.12 20.04-1.8 6.39-2.76 13.11-2.76 20.04 0 21.06 8.85 40.05 23.07 53.43 13.14 12.45 30.87 20.04 50.4 20.04z"
    /><path
      d="M419.3 232.9H303.32c1.8 6.39 2.76 13.11 2.76 20.04 0 21.06-8.85 40.05-23.04 53.43H419.3z"
    /></g
  >
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
