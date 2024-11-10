<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'friendica',
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
  <path d="m0 0H512V512H0" fill="none" /><defs
    ><linearGradient id="l" x2="0" y2="1"
      ><stop stop-color="#fff" stop-opacity=".4" offset="0" /><stop
        stop-color="#d6d7e8"
        stop-opacity="0"
        offset=".3"
      /><stop stop-opacity="0" offset=".7" /><stop stop-opacity=".4" offset="1" /></linearGradient
    ></defs
  ><rect x="89" y="89" width="334" height="334" rx="50" /><path
    d="m144 89c-30 0-55 25-55 55v225c0 30 25 55 55 55h225c30 0 55-25 55-55V144c0-30-25-55-55-55z"
  /><path
    d="M303.5 102v73H196v81H304v67H196v88H144c-24 0-42-19-42-42V144c0-24 19-42 42-42Z"
    fill="#ffc019"
  /><path
    d="m316 102v87H209v67h107v81H209v74h160c23 0 42-18 41-42V144c0-23-18-42-42-42z"
    fill="#1872a2"
  /><rect x="89" y="89" width="334" height="334" rx="50" fill="url(#l)" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'friendica'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
