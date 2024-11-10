<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'ecosia',
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
    fill="#008009"
    d="m45 204.7h62.7v32.7H68.8v12.3H94v12.5H68.8v12.4h38.9v32.6H45m136.6-8.4c-6 6.6-17 10.7-27 10.7s-40 0-40-53.5 30-53.5 40-53.5 21 4 27 10.6v33.7c-18-11-43.3-13-43.3 9.5s25 19.4 43.3 9m7.9-9.3c0 40 15 53.5 39 53.5s39.1-13.5 39.1-53.5-15.2-53.5-39.1-53.5-39 13.5-39 53.5h23.7c0-11 4-18.6 15.3-18.6s15.4 7.6 15.4 18.6-4 18.6-15.4 18.6-15.3-8-15.3-18.6m61.8 8.8c23 12 40 12.3 40 4s-18-8-32-18.4q-9.4-7-9.4-20.6t9.6-21c11.7-9 39-8.4 52.5 2.3v33.1c-23-9-36.7-8.6-36.6-1s18 8 32 17.8q9.9 7 10.4 17t-2.1 16c-8 19-40 19.3-64.3 7.8m74 5.5V204.7h29.7v102.6m7.2 0h28l13.5-84.8 13.5 84.8h28l-17.8-102.5h-47.3m32 66.2h-19v12.7h21"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'ecosia'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
