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
  <path d="M0 0h512v512H0" fill="#fff" /><path
    fill="#004482"
    d="m270.3 445 141.1-81.4a30 30 0 0 0 10.4-11l-166.3-96-166.3 96a30 30 0 0 0 10.4 11L240.8 445a30 30 0 0 0 29.5 0z"
  /><path
    fill="#659AD2"
    d="M421.8 160.5a30 30 0 0 0-10.4-11L270.3 68a30 30 0 0 0-29.6 0l-141 81.5a30 30 0 0 0-14.8 25.6V338a30 30 0 0 0 4.3 14.6z"
  /><circle cx="256" cy="256" r="86" fill="none" stroke="#fff" stroke-width="57" /><path
    fill="#00599C"
    d="M421.8 352.6a30 30 0 0 0 4.3-14.6V175.2a30 30 0 0 0-4.3-14.7l-166.3 96.1z"
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
