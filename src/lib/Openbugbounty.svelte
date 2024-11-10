<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'openbugbounty',
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
  <path d="m0 0H512V512H0" fill="none" /><path d="m304 69c-44 0-81 29-97 70h97z" /><path
    d="m145 105c-1-.05-3 .02-4 .2-11 2-19 12-17 24 6 38 31 61 53 74 .5 15 3 29 6 43h-61c-11 0-20 9-20 21 0 11 9 21 20 21h76c6 11 13 22 20 31-27 20-52 55-64 74-6 9-4 22 6 28 3 2 7 3 11 3 7 0 13-3 17-9 20-31 47-60 60-68 17 11 35 19 55 21v-202H192c-13-9-26-22-29-43-2-10-10-17-19-17z"
    fill="#f67909"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'openbugbounty'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
