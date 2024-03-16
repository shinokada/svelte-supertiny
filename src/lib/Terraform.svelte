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
    ariaLabel = 'Terraform',
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
  aria-label="Terraform"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#7B42BC"
    d="m224 159 98 56v113l-98-56V159zM115 95v113l98 56V152L115 95zm109 303 98 56V342l-98-56v113z M333 216v113l98-56v-113l-98 56z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Terraform';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
