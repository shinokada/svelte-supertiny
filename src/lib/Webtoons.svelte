<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'webtoons',
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
  <path d="M0 0h512v512H0" fill="#00d464" /><path
    fill="#fff"
    d="M316.3 193.8v11.4h14a5.7 5.7 0 00.05-11.4zm.5 27.8V233H333a5.7 5.7 0 000-11.4m50.2 13.77L397 91l-281.9 48.12 20.6 89.4h-55l55 165 130.63-20.63V421l144.4-61.87 20.63-123.8M299.4 179.73s32.87-2.58 40.9-2.09a16 16 0 0117.08 16.76A21.75 21.75 0 01349 212.45a18.9 18.9 0 019.8 18.2c-.2 14-15.5 16.8-15.5 16.8h-44m-53.23-63.2 46.25-3.54v15.8l-30.46.96v7.25h26.9v17.88h-27.2v9h30.8v15.8l-46.25-1.46zm-71.06 3.87 6.52 32.63 8.7-33.55 16.2-.4 8.46 34 8.95-36.5H241L225 244h-18.64l-7.74-29.8-8.43 29.9H170.7l-14.26-55.83m37.74 88.47-19.18-.4v51.64l-20.15 1.13v-53.2l-22.7-.47V256l62 2.53zm36.3 51.7a1 1 0 110-72 1 1 0 010 72m71-5.4a1 1 0 110-62.8 1 1 0 010 62.8m87-5.65H373l-18-24.7v27h-17.9v-57.7H355l18.8 29.7V262.8h17.3m-160.7 46.8a14.7 17 0 000-34 14.7 17 0 000 34m71-3.2a12.8 14.8 0 000-29.6 12.8 14.8 0 000 29.6"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'webtoons'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
