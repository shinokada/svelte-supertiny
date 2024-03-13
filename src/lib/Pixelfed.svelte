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
    ariaLabel = 'Pixelfed,',
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
  aria-label="Pixelfed"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><g fill="#f72"
    ><path
      id="a"
      d="M254 256c32-42 23-102-20-134s-108-15-140 27l11-19c52-63 143-89 210-58 50 17 78 72 62 123s-72 78-123 61"
    /></g
  ><use href="#a" transform="rotate(72 256 256)" fill="#1c3" /><use
    href="#a"
    transform="rotate(144 256 256)"
    fill="#08f"
  /><use href="#a" transform="rotate(216 256 256)" fill="#a3c" /><use
    href="#a"
    transform="rotate(288 256 256)"
    fill="#e15"
  /><path
    d="M101 142l1-1c32-42 93-51 135-19s50 91 18 133a96 96 0 00-15-17 84 84 0 00-117-115 87 87 0 00-22 19z"
    opacity=".3"
    id="b"
  /><g id="c"
    ><use href="#b" transform="rotate(72 256 256)" /><use
      href="#b"
      transform="rotate(144 256 256)"
    /></g
  ><use href="#c" transform="rotate(144 256 256)" /><path
    d="M241 297h35c33 0 60-26 60-58s-27-58-60-58h-51a34 34 0 00-34 33v131z"
    fill="#fff"
  /><circle cx="256" cy="256" r="196" fill="none" stroke="#fff" stroke-width="8" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Pixelfed,';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
