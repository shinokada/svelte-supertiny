<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'playstation',
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
  <path d="M0 0h512v512H0" fill="#fff" /><path
    fill="#0070d1"
    d="M381.3 281.6c-4.7 5.9-16.2 10.1-16.2 10.1L280 322.4v-14.9l62.6-22.3c7.1-2.6 8.2-6.2 2.4-8.1-5.8-2-16.3-1.4-23.5 1.2l-42.2 14.9v-23.7l2.4-.8s12.2-4.3 29.3-6.2c17.2-2 38.1.2 54.6 6.5 18.5 5.9 18.4 7 15.4 13zM284.7 242v-55c0-6.8-1.2-13.1-7.6-15-5-1.5-8 3-8 9.9v129.8L230 299.2V142.7c16.6 3 41 10.4 54 14.8 33.2 11.4 44.5 25.6 44.5 57.6 0 31.1-19.2 43-43.5 31.1zm-127 55.5c-19-5.3-22.1-16.5-13.4-23 8-6 21.6-10.4 21.6-10.4l56.2-20v22.8l-40.4 14.5c-7.2 2.5-8.3 6.2-2.5 8.1a42.8 42.8 0 0 0 23.5-1.2l19.5-7v20.4l-3.9.7a127 127 0 0 1-60.6-5z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'playstation'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
