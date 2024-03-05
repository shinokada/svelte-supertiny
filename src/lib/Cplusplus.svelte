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
    ariaLabel = 'Cplusplus,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="C++"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#fff" /><path
    fill="#004482"
    d="M270.3 445l141.1-81.4a30 30 0 0010.4-11l-166.3-96-166.3 96a30 30 0 0010.4 11L240.8 445a30 30 0 0029.5 0z"
  /><path
    fill="#659AD2"
    d="M421.8 160.5a30 30 0 00-10.4-11L270.3 68a30 30 0 00-29.6 0l-141 81.5a30 30 0 00-14.8 25.6V338a30 30 0 004.3 14.6z"
  /><circle cx="256" cy="256" r="86" fill="none" stroke="#fff" stroke-width="57" /><path
    fill="#00599C"
    d="M421.8 352.6a30 30 0 004.3-14.6V175.2a30 30 0 00-4.3-14.7l-166.3 96.1z"
  /><path
    stroke="#fff"
    stroke-width="13"
    d="M350.5 237 v39 M331,257 h39 M397.5 237 v39 M378,257 h39"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Cplusplus,';
@props:class?: string;
-->
