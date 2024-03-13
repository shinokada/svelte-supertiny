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
    ariaLabel = 'Google_podcasts,',
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
  aria-label="Google Podcasts"
  {role}
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="43"
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path stroke="#fab908" d="m256 109v22m0 64v122m0 64v22" /><path
    stroke="#ea4335"
    d="m181 176v75m0 64v21"
  /><path stroke="#34a853" d="m331 176v21m0 64v75" /><path stroke="#4285f4" d="m405 245v22" /><path
    stroke="#0066d9"
    d="m107 245v22"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Google_podcasts,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
