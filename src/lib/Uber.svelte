<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'uber',
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
    d="M88.6 191.4v78.5a1 1 0 0062.5 0v-78.6h19.1v127.3H151.3V306.8A49 49 0 0169.5 271v-79.6Zm95.8-.1h18.4v46.4a47.5 47.5 0 11-.2 69.3v11.6H184.4V191.3Zm50 113.2a32 32 0 10-32-32 32 32 0 0032 32M339.3 224a46.4 48.2 0 0146.4 48.2v6h-75.4a31 31 0 0057.4 12.8l13.3 9.8A49 49 0 11339.3 224m-28.8 39.6H367c-3.1-14.2-14.5-23.6-28.2-23.6-13.5 0-25 9.5-28.3 23.6m124.4-21.4a21 24 0 00-20.7 23.6v52.7h-18.4v-92.7H414v11.5c4.5-7.5 12-12.2 22.2-12.2h6.4v17.1Z"
    fill="#fff"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'uber'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
