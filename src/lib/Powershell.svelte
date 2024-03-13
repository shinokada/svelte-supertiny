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
    ariaLabel = 'Powershell,',
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
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="PowerShell"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="b" x1="0" x2=".9" y1=".2" y2=".73"
    ><stop stop-color="#c7e6ff" offset="0" /><stop
      stop-color="#a9c8ff"
      offset="1"
    /></linearGradient
  ><linearGradient id="a" x1="0" x2=".9" y1=".2" y2=".73"
    ><stop stop-color="#2d4664" offset="0" /><stop stop-color="#29405b" offset=".17" /><stop
      stop-color="#1e2f43"
      offset=".45"
    /><stop stop-color="#0c131b" offset=".8" /><stop offset="1" /></linearGradient
  ><g transform="skewX(-13)"
    ><rect x="143" y="104" width="344" height="304" rx="21" fill="url(#b)" opacity=".8" /><rect
      x="148"
      y="107.5"
      width="334"
      height="297"
      rx="17"
      fill="url(#a)"
    /></g
  ><use xlink:href="#c" x="3" y="3.5" stroke="#2c5591" /><g stroke="#fff"
    ><g id="c" fill="none" stroke-linecap="round"
      ><path d="m195 155 91 97m0 0-139 100" stroke-width="35" /><path
        d="m254 349h74"
        stroke-width="30"
      /></g
    ></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Powershell,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
