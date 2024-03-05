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
    ariaLabel = 'Google_maps_old,',
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
  aria-label="Google Maps"
  {role}
  viewBox="0 0 512 512"
  ><path id="a" d="m0 0H512V512H0" fill="#fff" /><clipPath id="b"><use xlink:href="#a" /></clipPath
  ><g clip-path="url(#b)"
    ><path fill="#35a85b" d="M0 512V0h512z" /><path fill="#5881ca" d="M256 288L32 512h448z" /><path
      fill="#c1c0be"
      d="M288 256L512 32v448z"
    /><path stroke="#fadb2a" stroke-width="71" d="M0 512L512 0" /><path
      fill="none"
      stroke="#f2f2f2"
      stroke-width="22"
      d="M175 173h50a50 54 0 1 1-15-41"
    /><path
      fill="#de3738"
      d="M353 85a70 70 0 0 1 140 0c0 70-70 70-70 157 0-87-70-87-70-157"
    /><circle cx="423" cy="89" r="25" fill="#7d2426" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Google_maps_old,';
@props:class?: string;
-->
