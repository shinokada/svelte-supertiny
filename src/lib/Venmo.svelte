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
    ariaLabel = 'Venmo,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Venmo"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#3396cd" /><path
    d="m381 105c11 18 16 37 16 60 0 75-64 173-116 241h-119l-48-285 104-10 25 203c24-38 53-99 53-140 0-23-4-38-10-50z"
    fill="#fff"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Venmo,';
@props:class?: string;
-->
