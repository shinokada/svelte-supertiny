<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'grafana',
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
  <path d="m0 0H512V512H0" /><linearGradient id="a" x1="1" y2="1"
    ><stop offset=".3" stop-color="#f05a28" /><stop
      offset="1"
      stop-color="#fbcc0a"
    /></linearGradient
  ><path
    fill="url(#a)"
    d="m382 141s6-17-6-40q-22-1-39 10-17-7-39-11-7-25-35-41-29 21-34 46-21 5-43 20-39-14-77 3s-5 41 20 74q-7 19-10 42-34 18-48 56 28 32 68 38 9 17 23 32-10 29 1 58 35 1 62-18s29 9 56 7q14 21 45 27s22-22 21-49q23-16 35-37 22 1 39-14-4-25-21-38c5-50-27-106-90-112s-95 56-81 94 56 49 80 30c4-4-1-9-5-6-34 15-73-21-50-62s86-29 102 17-26 113-95 100-117-84-74-170 199-80 232 46c1 4 6 3 6 0s4-56-43-102"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'grafana'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
