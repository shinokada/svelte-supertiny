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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#00b0b9"
    ><circle cx="87.4" cy="256" r="23.4" /><circle cx="168" cy="256" r="27.3" /><circle
      cx="248.3"
      cy="256"
      r="31.1"
    /><circle cx="327.7" cy="256" r="35" /><circle cx="409.2" cy="256" r="38.8" /><circle
      cx="248.3"
      cy="92.8"
      r="28.8"
    /><circle cx="248.3" cy="419.3" r="28.8" /><g id="a"
      ><circle cx="168" cy="174.4" r="26.1" /><circle cx="248.3" cy="174.4" r="30" /><circle
        cx="327.7"
        cy="174.4"
        r="33.8"
      /></g
    ><use href="#a" transform="translate(0,163.2)" /></g
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
