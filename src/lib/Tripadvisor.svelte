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
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#fcc40f"
    stroke="#000a12"
    stroke-width="17"
    d="M93 202a195 151 0 01326 0v56H93"
  /><g transform="translate(256 257)"
    ><g id="a" fill="#000a12"
      ><path d="M-115-97h-77c0 2 22 36 19 48M0 92-31 45V0H2" /><circle
        cx="-97"
        cy="0"
        r="97"
      /><circle cx="-97" cy="0" r="78" fill="#fff" /><circle cx="-97" cy="0" r="50" /><circle
        cx="-97"
        cy="0"
        r="33"
        fill="#fff"
      /></g
    ><use href="#a" transform="scale(-1 1)" /><circle
      cx="-97"
      cy="0"
      r="17"
      fill="#ef6a45"
    /><circle cx="97" cy="0" r="17" fill="#00b087" /></g
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
