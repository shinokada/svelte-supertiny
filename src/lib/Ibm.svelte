<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'ibm',
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
    fill="none"
    stroke="#1f70c1"
    stroke-width="12"
    d="M458 180H54m404 22H54m147 22H77m359 0H234m202 22H77m359 21H77m124 22H77m359 0H234m224 22H54m404 21H54"
  /><path
    fill="#fff"
    d="M111 215h56v81h-56zm33-42v166h-11V173zm197 0l28 76 26-76zm-6 72v94h67v-94l-33 93zm-105-71c34 0 62 49 17 82 44 32 18 82-17 82v3h49v-36l22-10v-77l-22-10v-36h-49z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'ibm'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
