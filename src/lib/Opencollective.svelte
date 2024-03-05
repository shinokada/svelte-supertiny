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
    ariaLabel = 'Opencollective,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Open Collective"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    d="m316 148a123.5 123.5 0 100 216l49 50a192 192 0 110-316"
    fill="#7fadf2"
  /><path d="m364 196a124 124 0 010 120l50 49a192 192 0 000-218" fill="#b8d3f4" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Opencollective,';
@props:class?: string;
-->
