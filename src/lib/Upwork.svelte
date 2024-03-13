<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    fill?: string;
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
    fill?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Upwork,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Upwork"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#6fda44" /><path
    {fill}
    d="M357.2 296.9c-17 0-33-7.2-47.4-18.9l3.6-17.2c3.2-17.6 13.1-47.2 43.8-47.2a1 1 0 010 83.3m-0-125.5c-39.2 0-69.5 25.4-81.9 67.3-18.8-28.3-33.1-62.2-41.4-90.8h-42.2v109.7a1 1 0 01-78.6 0v-109.8H71v109.7a1 1 0 00162.8 0V239.1c8.2 17.1 18.2 34.4 30.4 49.6l-25.8 121.4h43.1l18.7-88c16.4 10.5 35.2 17.1 56.8 17.1A1 1 0 00357.2 171.4"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Upwork,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
