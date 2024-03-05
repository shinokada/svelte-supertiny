<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Strava,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Strava"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fc4c01" /><path
    fill="#fff"
    d="M120 288L232 56l112 232h-72l-40-96-40 96z"
  /><path fill="#fda580" d="M280 288l32 72 32-72h48l-80 168-80-168z" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Strava,';
@props:class?: string;
-->
