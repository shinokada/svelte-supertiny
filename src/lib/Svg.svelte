<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'svg',
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
    d="M64 392a56 56 0 0056 56H392a56 56 0 0056-56V256H64"
  /><path
    d="m290 174v-28a43 43 90 10-68 0v28l-20-20a43 43 90 10-48 48l20 20h-28a43 43 90 100 68h28l-20 20a43 43 90 1048 48l20-20v28a43 43 90 1068 0v-28l20 20a43 43 90 1048-48l-20-20h28a43 43 90 100-68h-28l20-20a43 43 90 10-48-48z"
    fill="#ffb13b"
    stroke="#000"
    stroke-width="25.5"
  /><path fill="#000000d9" d="M87 256H424v167H87" /><path
    fill="none"
    stroke="#fff"
    stroke-width="29"
    d="m121 387a35 35 0 1063-21c-19-23-37-5-56-28a35 35 0 1163-21m29-55 36 172 36-172m98 55a35 35 0 00-70 0v70a35 35 0 0070 0v-35h-35"
  /><path d="M99 258H307v9H99" fill="#271b09" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'svg'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
