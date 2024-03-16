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
    ariaLabel = 'Colaboratory',
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
  aria-label="Google Colab"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M244 156a127 127 0 100 200l-32-53a66 66 0 110-94m224-43a1 1 0 10-180 180l43-43a1 1 0 0194-94"
    fill="#f9ab00"
  /><path
    d="M97.7 187.5a97 97 0 000 137m179.8 0a1 1 0 00137-137"
    fill="none"
    stroke="#e8710a"
    stroke-width="60.8"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Colaboratory';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
