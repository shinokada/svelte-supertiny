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
    ariaLabel = 'Vivino,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="Vivino"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#a91b2a" /><path
    stroke-linecap="round"
    stroke-width="70"
    stroke="#fff"
    d="m181 291zm41-70zm0 140zm40 70zm0-140zm0-140zm40-70zm0 140zm0 140zm41-70z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Vivino,';
@props:class?: string;
-->
