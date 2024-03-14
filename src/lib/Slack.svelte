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
    ariaLabel = 'Slack,',
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
  aria-label="Slack"
  {role}
  viewBox="0 0 512 512"
  stroke-width="78"
  stroke-linecap="round"
  ><path d="m0 0H512V512H0" {fill} /><path stroke="#36c5f0" d="m110 207h97m0-97h.1v-.1" /><path
    stroke="#2eb67d"
    d="m305 110v97m97 0v.1h.1"
  /><path stroke="#ecb22e" d="m402 305h-97m0 97h-.1v.1" /><path
    stroke="#e01e5a"
    d="M110 305h.1v.1m97 0v97"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Slack,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
