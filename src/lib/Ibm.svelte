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
    ariaLabel = 'Ibm,',
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
  aria-label="IBM"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="none"
    stroke="#1f70c1"
    stroke-width="12"
    d="M54 332h404M54 311h404m-224-22h202m-359 0h124M77 267h359M77 246h359m-202-22h202m-359 0h124M54 202h404M54 180h404"
  /><path
    fill="#fff"
    d="M111 215h56v81h-56zm33-42v166h-11V173zm197 0l28 76 26-76zm-6 72v94h67v-94l-33 93zm-105-71c34 0 62 49 17 82 44 32 18 82-17 82v3h49v-36l22-10v-77l-22-10v-36h-49z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Ibm,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
