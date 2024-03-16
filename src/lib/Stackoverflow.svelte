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
    ariaLabel = 'Stackoverflow',
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
  aria-label="Stack Overflow"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#f58025" /><path
    stroke="#fff"
    stroke-width="30"
    fill="none"
    d="m293 89 90 120m-28 27-115-97m-41 65 136 64m-11 36-148-31m-6 68h150m46-44V402H125V297"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Stackoverflow';
@props:class?: string;
-->
