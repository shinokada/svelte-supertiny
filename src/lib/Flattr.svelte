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
    ariaLabel = 'Flattr',
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
  aria-label="Flattr"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#FFF" /><path
    d="M112 254c0-77 63-140 141-140h76l-41 40 19 19 84-86H252c-92 0-167 75-167 167v131l27-25v-1-105zM420 124l-27 25v105c0 78-63 141-141 141h-76l41-40-19-19-84 86h138c93 0 168-75 168-167V124z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Flattr';
@props:class?: string;
-->
