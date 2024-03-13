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
    ariaLabel = 'Backbone,',
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
  aria-label="Backbone"
  {role}
  viewBox="0 0 512 512"
  fill="#0071b5"
  ><path d="m0 0H512V512H0" {fill} /><path d="m256 161v51l94-54v85l-94 53v55l141-80V81" /><path
    fill="#002a41"
    d="m115 81V271l282 160V241m-235 1V158l90 51v5l98 55v81"
  /><path d="m115 431V241l141-80v55l-94 53v81l94-54v55" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Backbone,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
