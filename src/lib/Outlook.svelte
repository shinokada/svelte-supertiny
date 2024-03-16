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
    ariaLabel = 'Outlook',
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
  aria-label="Outlook"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><rect
    width="231"
    height="270"
    x="168"
    y="107"
    fill="#05a"
    rx="3%"
  /><path fill="#136" d="M398 247v23l15-8s0-7-5-9l-10-6zm-230 43v70h77v-70h-77z" /><path
    fill="#17d"
    d="M168 150v70h77v-70h-77zm77 70v70h77v-70h-77zm77 70v70h77v-70h-77z"
  /><path fill="#3ae" d="M245 150v70h77v-70h-77zm77 70v70h77v-70h-77z" /><path
    fill="#5cf"
    d="M322 150h77v70h-77z"
  /><path fill="#19e" d="M413 261v128c0 7-2 15-7 18-3 2-124-71-124-71l131-75z" /><path
    fill="#2ae"
    d="M160 266c-4 3-6 7-6 12v117c0 8 6 14 14 14h230c4 0 5 0 8-2"
  /><rect width="172" height="172" x="70" y="172" fill="#18e" rx="3%" /><path
    fill="#fff"
    d="M154 305c-23 0-43-18-43-45 0-28 16-48 44-48 27 0 43 21 43 46 0 29-18 47-44 47zm1-75c-16 0-23 14-23 29 0 18 11 28 22 28 14 0 23-10 23-28s-8-29-22-29z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Outlook';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
