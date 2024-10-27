<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'fritz',
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
  <path d="m0 0H512V512H0" fill="#f8ec17" /><use xlink:href="#a" x="4" y="3.5" /><g fill="#e2001a"
    ><path
      id="a"
      d="m44 188v119h34v-42h29v-28H78v-21h32v-29zm75 136h33v-87h6c3 0 10 4 10 12s-6 15-16 23l34 56q13-10 26-24l-27-32c14-11 17-20 16-30s-5-17-16-22-27-7-65-5zm93-114v88h34V191h-25l4 16zm68 31v83h33v-83l28 1h2v-30h-93v30h2zm56 56h88v-30q-26 1.5-40 0l43-80q-34-2-84-2v30q13-1 36-1v1zm109-3 18-15-15-18-18 15zm15-33 8.5-56-28-2-3.5 57z"
      stroke="#000"
      stroke-width="2.6"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'fritz'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
