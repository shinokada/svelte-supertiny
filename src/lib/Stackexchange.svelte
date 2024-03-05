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
    ariaLabel = 'Stackexchange,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Stack Exchange"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    fill="#91d8f4"
    d="m156,71q-50,0 -50,50v16h300v-16q0,-50 -50,-50"
  /><path fill="#4ca2da" d="m106,157v60h300v-60" /><path
    fill="#376db6"
    d="m106,239v60h300v-60"
  /><path fill="#1e5397" d="M406,319H106v16q0,50 50,50h123v65l65,-65h12q50,0 50,-50" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Stackexchange,';
@props:class?: string;
-->
