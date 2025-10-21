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
  <defs
    ><linearGradient id="g" x2="0" y2="1"
      ><stop offset="0" stop-color="#97d9f6" /><stop
        offset=".66"
        stop-color="#0f80cc"
      /></linearGradient
    ></defs
  ><path d="m0 0H512V512H0" fill="none" /><path
    fill="url(#g)"
    stroke="#0f80cc"
    stroke-width="7.756"
    d="m269 347v40H124c-10 0-19-9-19-19V121c0-10 9-19 19-19h224"
  /><path
    fill="#003b57"
    d="M396 90c36.5 32.6.3 107-33 159-24 7.9-52.3 25-52.3 25 12-6 24.8-9.3 45.3-14-18 27-33 46-33 46s-31 12-41 42c19-107.8 80.4-216.5 107.7-241C310 170.5 255 350 280 429l-2 1c-5.9-13.5-9.4-47.5-8.1-78.3-.5-6-6.4-44-13.4-55.8-1.1-1.9.2-9.8 3.3-21.4 6.4 11.1 11.2 19.7 13.3 27.6 0 0-4.3-22-11.3-34.8 1.5-5.2 3.3-10.9 5.4-17 7.9 14 10.7 19.4 12.5 26.2-.4-1.8-4.2-20.5-10.3-32.8 10.9-57 46.9-120.5 75.6-146 18-15.7 36.1-21 51-7.7"
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
