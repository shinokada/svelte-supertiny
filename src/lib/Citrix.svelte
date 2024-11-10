<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'citrix',
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
    d="M420 301a1 1 0 008-7l-31-35 30-35a1 1 0 00-7-7l-29 34-29-34a1 1 0 00-8 7l30 35-31 35a1 1 0 008 7l29-35Zm-238-4a1 1 0 0011 0V221a1 1 0 00-11 0Zm45-71h19a1 1 0 000-10H227V192a1 1 0 00-11 0V297a1 1 0 0011 0Zm79 1c5 0 8-7 3-10-3-2-9-4-15-4-8 0-15 4-20 10v-2a1 1 0 00-11 0v76a1 1 0 0011 0V247c0-13 7-23 19-23 9 0 10 3 13 3m17 70a1 1 0 0010 0V221a1 1 0 00-10 0ZM82 259c0 27 18 45 43 45 26 0 38-18 38-27 0-6-8-8-11-2-5 13-14 19-27 19-19 0-32-14-32-35s14-36 33-36c12 0 22 7 26 17 3 7 11 5 11-1s-10-26-38-25c-25 0-43 18-43 45"
  /><circle cx="390.5" cy="194.5" r="8.7" /><circle cx="187.8" cy="194.5" r="8.7" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'citrix'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
