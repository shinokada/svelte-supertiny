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
    ariaLabel = 'Gmail,',
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
  aria-label="Gmail"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path d="m76 190v171q0 30 30 30h52V190" fill="#4285f4" /><path
    d="m354 190v201h52q30 0 30-30V190"
    fill="#34a853"
  /><path d="m350 255v-106l28-21c24-18 58 2 58 30v32" fill="#fbbc04" /><path
    d="m154 249v-106l102 77 98-74v106l-98 74"
    fill="#ea4335"
  /><path d="m76 190v-32c0-29 34-48 58-30L158 146v106" fill="#c5221f" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Gmail,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
