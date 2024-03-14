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
    ariaLabel = 'Protonmail,',
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
  aria-label="Proton Mail"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" x1=".8" y1="1"
    ><stop offset="0" stop-color="#d8cbff" /><stop
      offset="1"
      stop-color="#9d7aff"
    /></linearGradient
  ><radialGradient id="b" cx="1.4" cy="0" r="1.6"
    ><stop offset=".6" stop-color="#6d4aff" /><stop
      offset="1"
      stop-color="#aa8eff"
    /></radialGradient
  ><path
    fill="url(#a)"
    d="m84 184v-60c0-7 8-12 15-5l132 111c13 12 32 15 48 2l137-115c4-3 12-1 12 7v235a36 36 0 01-36 36h-60"
  /><path fill="url(#b)" d="M84 183v176a36 36 0 0036 36h235V168l-50 42-74 66s-17 13-36 0" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Protonmail,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
