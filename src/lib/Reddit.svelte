<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'reddit',
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
  <path d="m0 0H512V512H0" fill="#f40" /><g fill="#fff"
    ><ellipse cx="256" cy="307" rx="166" ry="117" /><circle cx="106" cy="256" r="42" /><circle
      cx="407"
      cy="256"
      r="42"
    /><circle cx="375" cy="114" r="32" /></g
  ><g stroke-linecap="round" stroke-linejoin="round" fill="none"
    ><path d="m256 196 23-101 73 15" stroke="#fff" stroke-width="16" /><path
      d="m191 359c33 25 97 26 130 0"
      stroke="#f40"
      stroke-width="13"
    /></g
  ><g fill="#f40"><circle cx="191" cy="287" r="31" /><circle cx="321" cy="287" r="31" /></g>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'reddit'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
