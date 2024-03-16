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
    ariaLabel = 'Deviantart',
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
  aria-label="DeviantArt"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#232b31" /><path
    fill="#00e49b"
    d="m358 151V91h-60l-6 6-28 54-9 6H154v82h56l5 6-57 110-3 6v60h60l6-6 28-54 9-6h100v-82h-56l-5-6"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Deviantart';
@props:class?: string;
-->
