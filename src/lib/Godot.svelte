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
  <path d="m0 0H512V512H0" fill="none" /><g id="a"
    ><path
      d="M168 221a38 37 0 11-1 0m90 79a12 11 0 01-13-11V254a12 11 0 0113-11V108q-12 0-21 2-9-20-19-37-28 6-52 17 0 24 3 42-17 10-36 27-16-11-34-20-21 23-34 45 13 21 24 34V348c1 64 86 87 169 87"
      fill="#478cbf"
    /><circle cx="171" cy="261" r="25" fill="#414042" /><path
      d="m87 326 63 6 2 33 66 5 5-32h35"
      fill="none"
      stroke="#fff"
      stroke-linejoin="round"
      stroke-width="13"
    /></g
  ><use href="#a" x="-512" transform="scale(-1,1)" />
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
