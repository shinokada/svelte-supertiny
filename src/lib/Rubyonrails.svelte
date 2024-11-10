<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'rubyonrails',
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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#c00"
    ><path d="M98 402c34-163 125-282 321-288v15c-121 33-180 118-159 273H98z" /><path
      d="m274 359-4 27 30 13 1-27zM88 283l-13 36 34 10 13-35zm70-108-25 27 31 23 25-30zm92-66-27 19 21 24 28-18zm75-10 6 18 28-7-6-16zm34 70 13 20 16-15-7-16zm-39 27-17 18 23 27 12-19zm-37 78-8 25 31 18 1-27z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'rubyonrails'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
