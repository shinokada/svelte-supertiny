<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'raspberry_pi',
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
  fill="#c51a4a"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><g transform="scale(2)"
    ><g id="a"
      ><path
        fill="#000"
        d="M129 234q-17 0-26-11-18.5-6.5-21-11-18-5-24-39-19-26 7-46-1.5-23 18-32-10-3.5-9-7-6.5-1-7-8-7-2.5-5-8-5-3.5-3-8-3-4 0-9c-1-1-2-10 7-9q3-4 9-2c1-3 6-5 9-2q5.5-4 12 0 9-3 13 2c5 0 12-1 20 19"
      /><path
        fill="#6cc04a"
        d="M63 53l5 7-5 2 8 6H66l9 6H69l9 6H72l9 4-3 2 9 2-3 3q24.5 5 30-9-10-11-35-24 18.5 5.5 37 20 15.5-8.5-4-29v4l-8-7v5l-9-6v4l-9-4 2 4-9-3 3 4-12-2 4 4"
      /><path
        d="M69 133c-19 9-9 34-3 37s15-42 3-37m35-34c7 2-30 32-31 26q-.5-28.5 31-26m-5 65c-29-3-19-44 6-44s22 44-6 44m-26 8c-9 6 3 43 26 35 9-7-8-43-26-35"
      /></g
    ><use xlink:href="#a" transform="matrix(-1 0 0 1 256 0)" /><path
      d="M106 216c17 24 45 5 44-2s-39-9-44 2m45-35c0-28-45-27-45 0s43 28 45 0m-43-75c5-15 34-15 40-1s-37 19-40 1"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'raspberry_pi'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
