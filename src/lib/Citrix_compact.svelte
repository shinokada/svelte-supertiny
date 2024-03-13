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
    ariaLabel = 'Citrix_compact,',
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
  aria-label="Citrix"
  {role}
  viewBox="0 0 512 512"
  ><rect height="512" width="512" {fill} />
  <path
    d="M346.2 340.2a1 1 0 01-19 16.6l-69.8-80.3-69.8 80.3a1 1 0 01-19-16.6l72.1-82.9-72.1-82.9a1 1 0 0119-16.6l69.8 80.3 69.8-80.3a1 1 0 0119 16.6l-72.1 82.9zm-88.8-251a1 1 0 000 40.2 1 1 0 000-40.2z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Citrix_compact,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
