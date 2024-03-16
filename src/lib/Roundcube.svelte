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
    ariaLabel = 'Roundcube',
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
  aria-label="Roundcube"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m256 107.6v340.6l192-111v-118.5z"
    fill="#37beff"
  /><path d="m256 107.6-192 111.1v118.5l192 111.1z" fill="#404f54" /><path
    d="m256 63.7c-73.3 0-132.8 59.6-132.8 133 0 24.2 6.5 46.9 17.7 66.4l115.1 66.6z"
    fill="#ccc"
  /><path
    d="m256 63.7c-42.1 28.4-59.5 85.7-59.5 133.1s17.4 104.5 59.5 132.9l115.1-66.6a132.5 132.5 0 0 0 17.7-66.4c0-73.4-59.5-133-132.9-133z"
    fill="#e5e5e5"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Roundcube';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
