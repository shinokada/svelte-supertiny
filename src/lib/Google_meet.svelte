<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'google_meet',
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
  <path d="m0 0H512V512H0" fill="none" /><path fill="#ea4335" d="M166 106v90H76" /><path
    fill="#ffba00"
    d="M166 106v90h120v62l90-73v-49q0-30-30-30"
  /><path
    fill="#00ac47"
    d="M346 406q30 0 30-30V327l-90-71v60H164v90m212-77 42 34c9 7 18 7 18-7V156c0-14-9-14-18-7l-42 34"
  /><path fill="#0066da" d="M76 314v62q0 30 30 30h60v-92" /><path
    fill="#2684fc"
    d="M76 196h90v120H76"
  /><path fill="#00832d" d="M286 256l90-73v146" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'google_meet'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
