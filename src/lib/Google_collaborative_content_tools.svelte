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
    ariaLabel = 'Google_collaborative_content_tools,',
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
  aria-label="Google Collaborative content tools"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M131.5 344h83v-174h83v-86h-136q-30 0-30 30"
    fill="#ffba00"
  /><path d="M297.5 84v86h83" fill="#ea4335" /><path
    d="M297.5 170h83v174h-83"
    fill="#2684fc"
  /><path d="M131.5 342v56q0 30 30 30h55v-86" fill="#00832d" /><path
    d="M214.5 342h85v86h-85"
    fill="#00ac47"
  /><path d="M297.5 342h83v56q0 30-30 30h-53" fill="#0066da" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Google_collaborative_content_tools,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
