<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'flutter',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a" y1="1"
    ><stop offset="0" stop-color="#204792" /><stop
      offset=".6"
      stop-color="#225a9d"
    /></linearGradient
  ><path fill="#225a9d" d="m270 340h-56v56l42 42h112" /><path
    d="m214 312v84l72-25"
    fill="url(#a)"
  /><path fill="#5cc8f8" d="M368 242H256l-42 42v56h56M368 74H256L74 256l56 56" /><path
    fill="#43b9f6"
    d="m158 340 56-56 56 56-56 56"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'flutter'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
