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
    ariaLabel = 'Hulu,',
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
  aria-label="Hulu"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#040405" /><path
    fill="#1ce783"
    d="M297 197h29v119h-29zm-51 85c0 4-3 7-8 7h-16c-4 0-8-3-8-7v-48h-29v50c0 21 14 31 33 31h28c18 0 29-13 29-31v-50h-29v48zm162-48v48c0 4-4 7-8 7h-17c-4 0-7-3-7-7v-48h-29v50c0 21 13 31 33 31h28c17 0 28-13 28-31v-50h-28zm-275 0h-19l-10 1v-38H76v118h28v-48c0-4 4-7 8-7h17c4 0 8 3 8 7v48h28v-51c0-22-14-30-32-30"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Hulu,';
@props:class?: string;
-->
