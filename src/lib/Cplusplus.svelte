<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'cplusplus',
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
    fill="#004482"
    d="M270.3 445l141.1-81.4a30 30 0 0010.4-11l-166.3-96-166.3 96a30 30 0 0010.4 11L240.8 445a30 30 0 0029.5 0z"
  /><path
    fill="#659AD2"
    d="M89.2 352.6A30 30 0 0184.9 338V175.1a30 30 0 0114.8-25.6L240.7 68a30 30 0 0129.6 0l141.1 81.5a30 30 0 0110.4 11Z"
  /><circle cx="256" cy="256" r="86" fill="none" stroke="#fff" stroke-width="57" /><path
    fill="#00599C"
    d="M255.5 256.6l166.3-96.1a30 30 0 014.3 14.7V338a30 30 0 01-4.3 14.6Z"
  /><path stroke="#fff" stroke-width="13" d="M350.5 237v39M331 257h39m27.5-20v39M378 257h39" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'cplusplus'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
