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
    ariaLabel = 'Xmpp,',
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
  aria-label="XMPP"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><linearGradient id="a" x2="0" y2="1"
    ><stop offset="0" stop-color="#002b5c" /><stop offset=".57" stop-color="#13b5ea" /><stop
      offset="1"
      stop-color="#1a4e7d"
    /></linearGradient
  ><g fill="#e96d1f" color="#d9541e"
    ><g id="b"
      ><path fill="url(#a)" d="m400 136q0 181-163 263c131-55 233-182 235-291" /><path
        d="m337 155c5 95-71 232-187 261v4s217-9 247-283"
      /><path
        fill="currentColor"
        d="m392.2 138.4c5 98-85 249-215.2 272.4q-9 3-27 7.2v4c156-12 274-173 261-290.3"
      /></g
    ></g
  ><use xlink:href="#b" transform="matrix(-1 0 0 1 512 0)" fill="#a0ce67" color="#439639" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Xmpp,';
@props:class?: string;
-->
