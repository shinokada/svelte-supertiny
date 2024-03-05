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
    ariaLabel = 'Drone,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Drone"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    fill="#1e375a"
    d="m207 170a97 98 0 00135 135l67 67A192 192 0 11140 103m34-20.6a192 192 0 01255.4 256L369 278A97 98 0 00234 143m53 23a58 58 0 102 0"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Drone,';
@props:class?: string;
-->
