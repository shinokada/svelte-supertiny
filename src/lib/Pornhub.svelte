<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'pornhub',
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
  <path d="m0 0H512V512H0" /><path
    d="m50 205v74h15v-28h14q28-1 28-24-1-21-21-22H50l15 12h12q15 0 14.5 11-.5 10-15.5 10H65v-21m45 35a1 1 0 0056 0 1 1 0 00-56 0h14.4v-1q.6-14 12.6-16h1q12 2 13 16v1q-1 15-12 16h-2q-12-1-12.6-16zm63-27h13v5q8-10 21-4l-4 13q-15-9-16 13v27h-14zm42 0h14v4q13-9 27-3 10 6 9 22v31h-15v-34q0-10-9-10-11 0-11 16v28h-15z"
    fill="#fff"
  /><path
    d="m287 190h172q6 1 7 7v102q-1 6-7 7H287q-6-1-7-7V197q1-6 7-7l9 20v70h13v-34q4-8 11-8 9 0 9 15v27h13v-32h8v15q0 16 15 18h5q10 0 14-6v5h33v-4q6 5 12 5h5q20-1 21-27 0-24-23-26-8 0-14 4v21q1-14 11-15h2q10 2 10 15 0 16-10 17h-2q-11-1-11-17v-21l.4-22H405v70h-8.5v-51H383v28q0 13-11 14-8 0-8-12v-30h-14v19h-8q1-19-16-20h-3q-7 0-14 4v-22h-13z"
    fill="#f90"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'pornhub'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
