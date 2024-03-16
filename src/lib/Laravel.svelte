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
    ariaLabel = 'Laravel',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="Laravel"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    stroke="#ff2d20"
    fill="none"
    stroke-width="11"
    stroke-linejoin="round"
    d="m233 435-130-73V136l64-38 66 39-66 38-64-39m64 39v150l66 37v73l132-73v-75l-68-38v-78l68-38 66 38v78l-66 38v-77l66-39m-66 39-68-39v78l-130 76m66-39V137m0 225 132-75"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Laravel';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
