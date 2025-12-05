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
  fill="#fff"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect width="100%" height="100%" fill="#fff" /><g transform="translate(40, 40) scale(0.9)"
    ><path
      d="M456 355c-17 3-27 0-36-14-20-30-43-60-64-90l-9-12c-27 35-53 68-76 102-9 13-18 18-34 14l97-131-91-117c16-3 27-2 36 13 21 30 44 59 68 90l67-90c9-13 18-17 33-13l-35 47-47 61c-6 7-5 12 0 19l91 121zM5 222c2-12 4-26 8-38 21-78 110-110 171-62 36 28 45 67 43 112H25c-3 80 55 128 129 104 25-9 40-29 48-54 4-13 10-15 22-11-6 31-20 57-49 74-43 25-105 17-137-18-19-20-27-44-31-71l-3-13v-22zm21-5h182c-2-58-38-99-86-99-54-1-94 40-96 99z"
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
