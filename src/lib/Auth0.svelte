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
  <path d="m0 0H512V512H0" fill="none" /><path
    id="a"
    d="M118.432 258.344c-6.172-.687-19.852-5.838-19.51 5.118 8.95 87.131 95.869 156.78 135.369 183.465 4.526 3.023 9.909-.755 9.909-6.181 0-108.253-39.877-165.436-125.768-182.402ZM244.306 75.081c-11.796 103.06-70.217 149.484-135.129 157.158-5.76.928-11.006-3.537-11.006-9.376V124.158c0-13.394 8.057-25.414 20.435-30.497 24.928-10.2 69.742-25.895 117.23-29.605 6.069-.48 9.025 6.173 8.47 11.025Z"
  /><use href="#a" transform="translate(512 0) scale(-1 1)" />
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
