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
    ariaLabel = 'Ok,',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...restProps}
  aria-label="OK.ru"
  {role}
  viewBox="0 0 512 512"
>
  <path d="m0 0H512V512H0" fill="#f58220" />
  <path
    fill="none"
    stroke-width="51.5"
    stroke="#fff"
    stroke-linecap="round"
    d="M318.25 173.5a57.25 57.25 0 10-124.5 0 57.25 57.25 0 10124.5 0M182.5 290.5a137 137 0 00146.5 0M189.25 401l66.25-66.25 66.25 66.25"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Ok,';
@props:class?: string;
-->
