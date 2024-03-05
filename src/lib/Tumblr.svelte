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
    ariaLabel = 'Tumblr,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Tumblr"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#001935" /><path
    fill="#fff"
    d="m148 173q73-21 81-103h57v94h67v68h-67v96q1 37 37 37h33v72h-62c-60 0-96-34-96-96V232h-50"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Tumblr,';
@props:class?: string;
-->
