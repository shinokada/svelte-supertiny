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
    ariaLabel = 'Quora,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="quora"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#b92b27" /><path
    d="M412.9 386a18 18 0 01-12.5 30.4l-146-.1a163 163 0 11128.8-59.8zM354 253.5a1 1 0 00-195 0 1 1 0 00195 0z"
    fill="#fff"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Quora,';
@props:class?: string;
-->
