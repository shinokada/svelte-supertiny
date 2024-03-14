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
    ariaLabel = 'Css3,',
    fill = ctx.fill || '#fff',
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
  aria-label="CSS3"
  {role}
  viewBox="0 0 512 512"
  ><path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52" /><path
    fill="#2965f1"
    d="M256 37V472l149-41 35-394"
  /><path
    fill="#ebebeb"
    d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"
  /><path {fill} d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Css3,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
