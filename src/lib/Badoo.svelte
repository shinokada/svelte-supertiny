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
    ariaLabel = 'Badoo',
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
  aria-label="Badoo"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#6e3eff" /><path
    fill="#ffbbd0"
    d="m256 166A102 108 0 0064 213c0 106 100 202 192 202s192-96 192-202A102 108 0 00256 166m70 48h38v5a1 1 0 11-216 0v-5h38v4a1 1 0 00140 0"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Badoo';
@props:class?: string;
-->
