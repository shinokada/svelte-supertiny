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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    fill="#00d16a"
    d="M74 223.9h53.5c6 0 10.7 4.8 10.7 10.7V288H84.7c-6 0-10.7-4.8-10.7-10.7v-26.8h26.8V272h10.7v-32.2H74zm299.8 0V288h26.7v-48h10.7v48.2H438v-53.5c0-6-4.8-10.7-10.7-10.7zm-149.9 91h53.5c6 0 10.7-4.8 10.7-10.7v-80.3h-26.7V272h-10.8v-48.2H224v53.5c0 6 4.8 10.7 10.7 10.7h26.8v10.7H224zM363 288.1h-53.5c-5.9 0-10.7-4.8-10.7-10.7V224h53.6c5.9 0 10.7 4.8 10.7 10.7v26.8h-26.8V240h-10.7v32.2H363zm-149.8-91v91h-53.6c-5.9 0-10.7-4.8-10.7-10.7v-42.8c0-6 4.8-10.7 10.7-10.7h16.1V272h10.7v-75z"
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
