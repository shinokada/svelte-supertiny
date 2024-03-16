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
    ariaLabel = 'Logitech',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="Logitech"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#00a7e0"
    d="M348.9 390.7H426V223.3H258.6v77.1h90.3v90.3zm-91.8-24.5a109.4 109.4 0 0 1 0-218.8V70C153 70 68.9 153.8 68.9 256.6s84.5 186.7 187.9 186.7l.3-77.1z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Logitech';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
