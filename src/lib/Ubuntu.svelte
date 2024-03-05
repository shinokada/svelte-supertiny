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
    ariaLabel = 'Ubuntu,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Ubuntu"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#e65e17" /><circle
    cx="265"
    cy="256"
    r="124"
    fill="none"
    stroke="#fff"
    stroke-width="51"
  /><g fill="#fff" stroke="#e65e17" stroke-width="10"
    ><circle cx="90" cy="257" r="41" /><circle cx="353" cy="409" r="41" /><circle
      cx="353"
      cy="104"
      r="41"
    /><path stroke-width="19" d="M185,118l82,138m0,0h155h-155l-84,140" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Ubuntu,';
@props:class?: string;
-->
