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
  <defs>
    <path
      id="s"
      d="m221 107S91 54 97 175c1 26 37 196 80 144l31-34M292 97s73-28 117 28c15 20-2 101-45 164 0 0 3 14 43 5 18-4 7 10-11 19-15 7-48 9-49-1-1-25 18-17 17-23s-10-11-15-25c-5-12-67-103 17-89 3-1-22-80-101-81s-76 97-76 97c1 14 2 25-1 47-3 21 7 52 46 53v6s0-12 6-26c14-32 14-52 8-78-6-30-47-15-59-2m158 121c-1 10-6 55-9 71-4 22-13 32-37 37-29 6-37-13-41-23s-5-50-4-90c0 8-19 32-53 23-8-2-21-10 1-15s19-7 30-19c5-5 10-3 13-2 5 2 9 7 9 13M366 175c1 13-4 23-4 37-1 20 10 43-6 66"
    /></defs
  ><path d="m0 0H512V512H0" fill="none" /><use href="#s" stroke="#000" stroke-width="30" /><path
    fill="#336791"
    d="M292 97c40 15 65 41 74 77V290l-17 23s-83 9-113-16L213 161l79-64"
  /><use href="#s" fill="#336791" stroke="#fff" stroke-width="10" /><path
    fill="#fff"
    d="M226 187c4 0 7 0 10 2 2 1 3 3 2 5-5 9-18 5-19-3 0-1 0-1 1-2 2-2 4-2 6-2Zm118-3c2 0 4 1 5 2 2 2 0 4-2 6-3 3-8 3-11 1-1-1-3-3-2-5 2-3 6-4 10-4Z"
  />
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
