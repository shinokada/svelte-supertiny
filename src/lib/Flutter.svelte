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
    ariaLabel = 'Flutter,',
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
  aria-label="Flutter"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" y1="1"
    ><stop offset="0" stop-color="#204792" /><stop
      offset=".6"
      stop-color="#225a9d"
    /></linearGradient
  ><path fill="#225a9d" d="m270 340h-56v56l42 42h112" /><path
    d="m214 312v84l72-25"
    fill="url(#a)"
  /><path fill="#5cc8f8" d="m130 312-56-56L256 74h112m-98 266h-56v-56l42-42h112" /><path
    fill="#43b9f6"
    d="m158 340 56-56 56 56-56 56"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Flutter,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
