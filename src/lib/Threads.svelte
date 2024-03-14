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
    ariaLabel = 'Threads,',
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
  aria-label="Threads"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" /><path
    stroke="#fff"
    stroke-width="34.5"
    d="m200.7 200c12.3-18 33.3-32 66.3-29s63 22 61.2 86-29.2 86-67.3 87.4-61-21.5-61.6-45.8 15.2-53.7 79.2-52.6 110.7 30.5 113.7 84-46 108.5-133.2 108-156-50-156.5-179S173 79 256 79s134 41 153.2 111.3"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Threads,';
@props:class?: string;
-->
