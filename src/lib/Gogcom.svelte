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
    ariaLabel = 'Gogcom,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="GOG.com"
  {role}
  viewBox="0 0 512 512"
  fill="#333"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    id="g"
    d="M84 265h82q17-1 18-18V139q-1-17-18-18h-64q-17 1-18 18v64q1 17 18 18h43v-24h-29q-8 0-8-8v-36q0-8 8-8h36q8 0 8 8v80q0 8-8 8H84z"
  /><path
    id="o"
    d="M224 221h64q17-1 18-18v-64q-1-17-18-18h-64q-17 1-18 18v64q1 17 18 18zm14-24q-8 0-8-8v-36q0-8 8-8h36q8 0 8 8v36q0 8-8 8z"
  /><use x="244" xlink:href="#g" /><use x="-19" y="170" xlink:href="#o" /><path
    d="M307 391h24v-67q0-8 8-8h16v75h24v-67q0-8 8-8h16v75h24V291H325q-17-1-18 18zM167 291h-65q-17 1-18 18v64q1 17 18 18h65v-24h-51q-8 0-8-8v-36q0-8 8-8h51z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Gogcom,';
@props:class?: string;
-->
