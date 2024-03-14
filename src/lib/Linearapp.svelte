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
    ariaLabel = 'Linearapp,',
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
  aria-label="Linear"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#5e6ad2" /><path
    {fill}
    stroke="#fff"
    stroke-width="7"
    stroke-linejoin="round"
    d="m72.2 299.3s20 111 140.4 140.5zm195.4 145.2q16-1 26.6-3.6L71.3 217.8q-2 7-3.8 26.6zM83.4 179.7q4-9 10.3-19.9l258.5 258.5q-9 6-20 10.2zM381.3 397A188.6 188.6 0 10115 130.8z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Linearapp,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
