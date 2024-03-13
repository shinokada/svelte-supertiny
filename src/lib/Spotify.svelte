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
    ariaLabel = 'Spotify,',
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
  aria-label="Spotify"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><circle cx="256" cy="256" fill="#1ed760" r="192" /><g
    fill="none"
    stroke="#fff"
    stroke-linecap="round"
    ><path d="m141 195c75-20 164-15 238 24" stroke-width="36" /><path
      d="m152 257c61-17 144-13 203 24"
      stroke-width="31"
    /><path d="m156 315c54-12 116-17 178 20" stroke-width="24" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Spotify,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
