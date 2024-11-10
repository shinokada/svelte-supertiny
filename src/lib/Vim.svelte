<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'vim',
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
  <path d="m0 0H512V512H0" fill="none" /><g transform="matrix(5.75 0 0 5.75 83.5 83.5)"
    ><path d="m30 0L0 30l30 30 30-30z" fill="#007f00" stroke="#000" stroke-width=".8" /><g
      fill="#bfbfbf"
      ><g stroke="#000" stroke-width="2.5"
        ><path
          id="a"
          d="m8 5-2 2v4l2 1h2v40l3 2h3l43-44V7l-2-2H40l-2 2v4l2 1h2l-1 1-17 16V12h2l2-1V7l-2-2z"
        /></g
      ><use xlink:href="#a" /><g stroke="#000" stroke-width="2.5"
        ><path
          id="b"
          d="m31 36h3v3h-3zm-.5 6-.5-1h4l-4 11.5h1V54h-5v-1.5h1zm7.5-1h5l1 1 1-1h4l1 1 1-1h5l1 1v3l-3 7.5h1V54h-5v-1.5h1l3-7.5h-5l-3 7.5h1V54h-5v-1.5h1l3-7.5h-5l-3 7.5h1V54h-5v-1.5h1L38.5 42z"
        /></g
      ><use xlink:href="#b" /></g
    ></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'vim'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
