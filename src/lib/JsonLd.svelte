<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'json ld',
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
    d="m264 191c.9 18.9-42.5 41.8-60.1 35.4a40.3 40.3 0 104.4 67.2c15-9.9 60 14.1 60.8 32.1a40.3 40.3 0 1056.8-35.6c-13.4-7.7-14.8-61.4-.9-69.4A40.3 40.3 0 10264 191zm17.7 28.9a40 40 0 0010.6 5c12 11.4 12.9 55.1.2 65.4a40 40 0 00-9.5 6.1c-11.3 5.7-56.3-15.3-58.6-34.2a40 40 0 00-.5-7.4c0-11.9 40.5-41.3 57.8-34.9z"
    fill="#0c479c"
  /><path
    id="a"
    d="M279 206c-8-9-3-22 0-27 1-1 3-3 5-2a9 9 0 0010-14c8-5 20-9 29-3-14-12-33-7-43 4s-13 32-1 43"
    fill="#fff"
  /><use x="7" y="141" href="#a" /><use x="-119" y="76" href="#a" /><g id="c"
    ><path
      id="b"
      d="m55 256v11c27 0 47-1 47 41v37c0 49 15 56 74 56v-22c-15 0-33 0-39-6-5-7-6-14-6-29v-38c0-22-3-43-31-50H55z"
    /><use transform="scale(1 -1)" y="-512" href="#b" /></g
  ><use transform="scale(-1 1)" x="-512" href="#c" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'json ld'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
