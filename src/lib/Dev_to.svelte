<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'dev_to',
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
  <path d="m0 0H512V512H0" /><path
    d="M429.1 172.9H396.5L366.9 286.6 337.2 172.9H304.6l38.5 144.8c10.5 24.6 34.2 30.8 47.4 0Zm-142.2.1H223.7c-11.1.3-20 9.5-19.7 20.7v125c.3 11.2 9.5 20 20.7 19.7h62.2V308.8H233.6V270.4h32.6V240.8H233.6V202.4h53.3ZM186.2 220.3c0-18.8-12-47.3-47.4-47.3H91.4V338.3h46.4c36.8.1 48.4-28.4 48.4-47.2Zm-45.7-16.4c9.7.1 16.8 7 17.5 17.4V291c-.1 8.7-7.3 16.9-17.5 17.4H123.1V203.9h17.4Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'dev_to'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
