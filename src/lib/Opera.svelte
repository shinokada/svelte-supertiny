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
    ariaLabel = 'Opera,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Opera"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    d="m359.2 255a101.2 141.5 0 100 2m88.8 0a187 190 0 110-2"
    fill="#a70014"
  /><path d="m384 112.9a192 192 0 100 286.2 150.2 166.6 0 110-286.2" fill="#f23" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Opera,';
@props:class?: string;
-->
