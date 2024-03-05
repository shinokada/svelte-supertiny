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
    ariaLabel = 'Uphold,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="Uphold"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    d="M360 277c-9 19-20 36-33 50 9-34 5-78-15-120-10-22-24-42-40-59 25-19 51-25 71-16 13 6 23 17 28 33 12 31 7 72-11 112m-208 0c-18-40-23-81-11-112 5-16 15-27 28-33 20-9 46-3 71 16-16 17-30 37-40 59-20 42-24 86-15 120-13-14-24-31-33-50m123 86a47 47 0 01-38 0c-38-17-46-85-17-148 10-20 22-37 36-52 14 15 26 32 36 52 29 63 21 131-17 148m52-256c-23-1-48 8-71 27-23-19-48-28-71-27a126 126 0 01142 0m66 51c-20-56-74-94-137-94s-118 38-137 94v1c-13 35-8 82 12 127 28 60 79 102 124 102h2c45 0 96-42 124-102 20-45 25-92 12-128m-98 263c-13 4-26 6-38 6h-2c-12 0-25-2-37-6-6-1-13 2-14 7-2 6 1 12 7 14 15 4 30 6 44 6h2c14 0 29-2 44-6 6-2 9-8 8-13-2-6-9-9-14-8"
    fill="#49cc68"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Uphold,';
@props:class?: string;
-->
