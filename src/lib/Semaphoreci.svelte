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
    ariaLabel = 'Semaphoreci,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Semaphore CI"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    id="a"
    d="M448 235.4l-40 40.6-66.5-67.7a49.3 49.3 0 00-69.7 0l-52.7 53.6a19.4 19.4 0 01-27.5 0l-26.1-26.5 66.5-67.7a105.7 105.7 0 01149.5 0L381.5 167.8z"
  /><use xlink:href="#a" transform="rotate(180,255.9,256.1)" fill="#F16332" /><use
    xlink:href="#a"
    fill="#029D75"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Semaphoreci,';
@props:class?: string;
-->
