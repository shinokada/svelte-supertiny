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
    ariaLabel = 'Epub',
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
  aria-label="ePub"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#FFF" /><path
    fill="#86b918"
    d="M256 377L135 256l121-121 40 41-80 80 40 40 121-120L272 70c-9-8-23-8-32 0L70 240c-8 9-8 23 0 32l170 170c9 8 23 8 32 0l170-170c8-9 8-23 0-32l-25-24z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Epub';
@props:class?: string;
-->
