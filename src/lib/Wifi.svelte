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
    ariaLabel = 'Wifi,',
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
  aria-label="WiFi"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M392 220a11 11 0 110-1zm-152 0a11 11 0 110-1zm-111-48a63 63 0 00-63 63v41a63 63 0 0063 63h254a63 63 0 0063-63v-41a63 63 0 00-63-63zm243 66v60h18v-60zm-79-27v87h19v-34h44v-18h-44v-18h47v-17zm-176 0l13 56l17-56h15l17 58l14-58h17l-23 87h-16l-17-60l-18 60h-15l-23-87zm121 27v60h-18v-60zm202 39a56 56 0 01-56 56H209a56 56 0 0056-56v-43a56 56 0 0156-56h63a56 56 0 0156 56zm-290 74a142 142 0 00212 0zm212-191a142 142 0 00-212 0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Wifi,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
