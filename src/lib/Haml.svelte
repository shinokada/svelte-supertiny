<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'haml',
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
  <path d="m0 0H512V512H0" fill="#3e3e2a" /><use
    xlink:href="#a"
    stroke="#29291c"
    stroke-width="22"
  /><path
    id="a"
    fill="#ecdfa7"
    d="M115 91l81 165-43 184c27 19 61 25 90 17a11062 11062 0 0028-153c18 21 47 29 72 32-1 5-7 16-2 18 17 10 40 13 55 0 8-7 12-15 12-25 12-6 23-16 21-29-1-19-18-32-31-41-11-8-34-10-40-21-8-13 2-24 2-37l28-24 3 2s9 1 14-12l-2-2c3-3 10-9 9-10-2-2-10 4-14 7l-9-6 18-15c5 1 14 8 16 3-7-16-37-30-47-32-2 0-3 2-5 3l-9-3-112 95-46-99h3c1-2 3-13-9-11 0-2-7-22-11-23-15-6-53 10-72 17zm68-6l6 12-13 1-6-11zm12 24l52 101-8 7-56-106zm188 9c7 1 35 20 36 22-3 0-35-20-36-22zm-39 94c-4 11-5 24 2 32 11 15 31 14 46 23 12 7 27 18 28 32 1 10-5 17-12 23 0-1-3-20-5-15-9 24-28 15-45 8l-3 1-10 15c-31-3-64-39-72-44l2-23c23-16 46-34 69-52zm-75 53l2 3-32 183-3 1 26-185 114-99 6 5z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'haml'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
