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
    ariaLabel = 'Stumbleupon',
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
  aria-label="StumbleUpon"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#ea4b24" /><path
    fill="none"
    stroke="#fff"
    stroke-width="63"
    d="m99 260v52a52.5 55.5 0 00105 0v-122a52 49.5 0 01104 0v122a52.5 55.5 0 00105 0V260"
  /><path fill="#ea4b24" d="M273 215v44l35 15 35-15v-44l-35 15z" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Stumbleupon';
@props:class?: string;
-->
