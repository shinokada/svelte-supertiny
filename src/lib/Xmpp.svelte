<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'xmpp',
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
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a" x2="0" y2="1"
    ><stop offset="0" stop-color="#002b5c" /><stop offset=".57" stop-color="#13b5ea" /><stop
      offset="1"
      stop-color="#1a4e7d"
    /></linearGradient
  ><g fill="#e96d1f" color="#d9541e"
    ><g id="b"
      ><path fill="url(#a)" d="m400 136q0 181-163 263c131-55 233-182 235-291" /><path
        d="m337 155c5 95-71 232-187 261v4s217-9 247-283"
      /><path
        fill="currentColor"
        d="m392.2 138.4c5 98-85 249-215.2 272.4q-9 3-27 7.2v4c156-12 274-173 261-290.3"
      /></g
    ></g
  ><use xlink:href="#b" transform="matrix(-1 0 0 1 512 0)" fill="#a0ce67" color="#439639" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'xmpp'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
