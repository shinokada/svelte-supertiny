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
    ariaLabel = 'Justgiving,',
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
  aria-label="JustGiving"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m443 216h-132l-77 76h106c-14 30-45 51-81 51-49 0-89-38-89-87 0-49 40-88 89-88 17 0 34 5 48 14l71-71c-33-27-74-43-119-43-104 0-189 84-189 188 0 103 85 187 189 187 104 0 187-84 187-187 0-14 0-28-3-40z"
    fill="#7A04DD"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Justgiving,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
