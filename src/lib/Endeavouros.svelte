<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'endeavouros',
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
    d="M285 111.36c31 44.7 161.53 217.54 72.62 253.57-41.53 19.47-230.76-11.43-228-6.38l-24.37 41.01s145.92 6.7 258.6-8.8c160.85-22-33.12-232.1-78.73-279.2z"
    fill="#7f7fff"
  /><path
    d="M285 111.36C274.7 112.81 85.47 350.38 85.47 350.38s13.65 3.95 44.66 8.52c10-7.97 151.35-250.8 155.43-247.33-.1-.1-.2-.13-.36-.11z"
    fill="#ff7f7f"
  /><path
    d="M285 111.36c-6.5-1.08-155.4 247.34-155.4 247.34s135.06 14.55 190.71 13.58c156.78-2.7 1.2-212-35-261.18a.3.3 0 00-.17-.1z"
    fill="#7f3fbf"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'endeavouros'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
