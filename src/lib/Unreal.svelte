<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M0 0H512V512H0" fill="#fff" /><g transform="scale(15.9)"
    ><path
      fill="#000"
      d="M16 0c-8.8 0-15.9 7.2-15.9 16s7.1 16 15.9 16c8.8 0 15.9-7.2 15.9-16S24.8 0 16 0zm0 .7c4.1 0 7.9 1.6 10.7 4.5 2.9 2.9 4.4 6.8 4.4 10.8 0 4.1-1.5 7.9-4.4 10.8-2.8 2.9-6.7 4.5-10.7 4.5-4 0-7.9-1.6-10.7-4.5C2.5 23.9.9 20.1.9 16c0-4.1 1.5-7.9 4.4-10.8C8.1 2.3 12 0.7 16 .7zm-.8 5.6c-2.6.7-5 2-8.2 5.7S4.4 19.6 4.4 19.6s.9-2.1 3-4.3c1-1 1.7-1.4 2.3-1.4.5 0 .8.3.8.8v7.4c0 .7-.5.9-.9.9-.4 0-.7-.1-.7-.1 2.2 3.2 7.4 3.6 7.4 3.6l2.3-2.4.1.1 2.1 1.8c3.8-2.3 5.7-6.5 5.7-6.5-1.7 1.8-2.8 2.2-3.4 2.2-.6 0-.8-.3-.8-.3 0-.2-.1-2.4-.1-4.7 0-2.3 0-4.7.1-4.7.7-1.2 2.8-3.7 2.8-3.7-3.9.8-6.1 3.4-6.1 3.4-.6-.5-1.9-.4-1.9-.4.6.3 1.2 1.3 1.2 2.1v7.9s-1.3 1.2-2.3 1.2c-.6 0-1-.3-1.2-.6-.1-.1-.1-.2-.2-.3v-9.8c-.1.1-.3.2-.5.2-.2 0-.4-.1-.6-.4-.1-.2-.2-.6-.2-1.1 0-1.8 2-3 2-3z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
