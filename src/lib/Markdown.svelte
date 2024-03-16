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
    ariaLabel = 'Markdown',
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
  aria-label="Markdown"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M410 366H102C88 366 76 354 76 340V170c0-14 12 -26 26 -26h307c14 0 26 12 26 26v170c0 14-11 26 -25 26zM102 162c-4 0-9 4 -9 9v170c0 5 4 9 9 9h307c5 0 9-4 9 -9V170c0-5 -4 -9 -9 -9c1 0-307 0 -307 0zm26 153V196h34l34 43l34-43H265V314h-34v-68l-34 43l-34-43v68zm216 0l-52-57h34v-61h34v60h34z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Markdown';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
