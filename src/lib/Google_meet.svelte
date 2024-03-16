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
    ariaLabel = 'Google_meet',
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
  aria-label="Google Meet"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path fill="#ea4335" d="M166 106v90H76" /><path
    fill="#ffba00"
    d="M166 106v90h120v62l90-73v-49q0-30-30-30"
  /><path
    fill="#00ac47"
    d="M376 183l42-34c9-7 18-7 18 7v200c0 14-9 14-18 7l-42-34m-212 77v-90h122v-60l90 71v49q0 30-30 30"
  /><path fill="#0066da" d="M76 314v62q0 30 30 30h60v-92" /><path
    fill="#2684fc"
    d="M76 196h90v120H76"
  /><path fill="#00832d" d="M286 256l90-73v146" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Google_meet';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
