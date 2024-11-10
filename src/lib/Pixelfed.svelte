<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'pixelfed',
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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#f72"
    ><path
      id="a"
      d="M254 256c51 17 107-10 123-61S365 89 315 72c-67-31-158-5-210 58L94 149c32-42 97-59 140-27s52 92 20 134"
    /></g
  ><use href="#a" transform="rotate(72 256 256)" fill="#1c3" /><use
    href="#a"
    transform="rotate(144 256 256)"
    fill="#08f"
  /><use href="#a" transform="rotate(216 256 256)" fill="#a3c" /><use
    href="#a"
    transform="rotate(288 256 256)"
    fill="#e15"
  /><path
    d="M101 142l1-1c32-42 93-51 135-19s50 91 18 133a96 96 0 00-15-17A84 84 0 00123 123a87 87 0 00-22 19z"
    opacity=".3"
    id="b"
  /><g id="c"
    ><use href="#b" transform="rotate(72 256 256)" /><use
      href="#b"
      transform="rotate(144 256 256)"
    /></g
  ><use href="#c" transform="rotate(144 256 256)" /><path
    d="M191 345V214a34 34 0 0134-33h51c33 0 60 26 60 58s-27 58-60 58H241Z"
    fill="#fff"
  /><circle cx="256" cy="256" r="196" fill="none" stroke="#fff" stroke-width="8" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'pixelfed'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
