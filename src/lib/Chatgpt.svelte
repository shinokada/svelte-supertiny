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
  <path d="M0 0h512v512H0" fill="#fff" /><defs
    ><path
      id="a"
      d="m243.3 208.7 88.9 51.3c.3.1.5.4.5.7V361c5.8-.3 11.5-.7 17-.9a79.8 79.8 0 0053.3-38.7c17.6-30.3 13.6-68.5-9.9-94.5-6-5-12-10-17.8-14.8-.5-.3-1.3-.8-1.9-1.1l-61.8-35.7a10.4 10.4 0 00-10.5 0l-57.7 33.5zm105.1 43.7-77.8-44.9 26.9-15.5c.3-.2.6-.2.9-.1l64.4 37.2c28.7 16.6 38.5 53.3 21.9 81.9a59.9 59.9 0 01-31.2 26.3v-75.8c0-3.7-2-7.2-5.2-9.1z"
    /></defs
  ><use href="#a" /><use href="#a" transform="rotate(60 256 256)" /><use
    href="#a"
    transform="rotate(120 256 256)"
  /><use href="#a" transform="rotate(180 256 256)" /><use
    href="#a"
    transform="rotate(240 256 256)"
  /><use href="#a" transform="rotate(300 256 256)" />
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
