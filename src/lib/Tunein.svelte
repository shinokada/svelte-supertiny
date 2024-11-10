<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'tunein',
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
  <path d="m0 0H512V512H0" fill="#1c203c" /><path
    fill="#14d8cc"
    d="M226 232h32v11H238v11h20v11H238v11h21v11H226V232Zm-44 0h13l11 31V232h12v55H204l-11-31v31H182V232Zm-47 0h11v39s0 6 8 6 8-6 8-6V232h11v39s0 17-19 17-19-17-19-17V232Zm-43 0h35v11H115v44H104V243H92V232ZM62 204V315H292V204H62Zm310-12v56h11V215l13 33h12V192H397v34l-12-34H372Zm-37 0v11h8v34h-9v11h30V237H354V203h9V192H335Zm-37-40H441s6 0 6 6V281s0 6-6 6H304v34s0 6-6 6H56s-6 0-6-6V198s0-6 6-6H292V158s0-6 6-6Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'tunein'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
