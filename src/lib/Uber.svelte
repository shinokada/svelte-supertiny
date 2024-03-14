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
    ariaLabel = 'Uber,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="Uber"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" /><path
    d="M88.6 191.4v78.5a1 1 0 0062.5 0v-78.6h19.1v127.3H151.3V306.8a49 49 0 01-81.8-35.8v-79.6ZM184.4 191.3h18.4v46.4A47.5 47.5 0 11202.6 307v11.6H184.4V191.3Zm50 113.2a32 32 0 10-32-32 32 32 0 0032 32M339.3 224a46.4 48.2 0 0146.4 48.2v6h-75.4a31 31 0 0057.4 12.8l13.3 9.8a49 49 0 11-41.7-76.8m-28.8 39.6H367c-3.1-14.2-14.5-23.6-28.2-23.6-13.5-0-25 9.5-28.3 23.6m124.4-21.4a21 24 0 00-20.7 23.6v52.7h-18.4v-92.7H414v11.5c4.5-7.5 12-12.2 22.2-12.2h6.4v17.1Z"
    {fill}
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Uber,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
