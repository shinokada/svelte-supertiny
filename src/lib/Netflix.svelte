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
    ariaLabel = 'Netflix,',
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
  aria-label="Netflix"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" x1=".29" x2=".71" y1=".61" y2=".39"
    ><stop offset="0" stop-color="#b1060f" /><stop offset=".5" /><stop
      offset="1"
      stop-color="#b1060f"
    /></linearGradient
  ><path fill="url(#a)" d="m155 73V439q41-5 72-6V99m58 199V73h72v366" /><path
    fill="#e50914"
    d="M155 73h72l130 366q-41-5-74-6"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Netflix,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
