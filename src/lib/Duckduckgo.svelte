<script lang='ts'>
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

    type TitleType = {
    id?: string | undefined | null;
    title?: string | undefined | null;
  };
  type DescType = {
    id?: string | undefined | null;
    desc?: string | undefined | null;
  };
  interface BaseProps extends SVGAttributes<SVGElement>{
    size?: string | undefined | null;
    role?: string | undefined | null;
    color?: string | undefined | null;
    class?: string | undefined | null;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string | undefined | null;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img',  
    ariaLabel =  "duckduckgo" , 
    class: classname, 
    title,
    desc,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label={ariaLabel}
  {role}
  viewBox="0 0 512 512"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
{#if title?.id && title.title}
  <title id={title.id}>{title.title}</title>
{/if}
{#if desc?.id && desc.desc}
  <desc id={desc.id}>{desc.desc}</desc>
{/if}
  <path d="m-128 -128H128V128H-128"/><circle r="108" fill="#d53"/><circle r="96" fill="none" stroke="#fff" stroke-width="7"/><path d="M-32-55C-62-48-51-6-51-6l19 93 7 3M-39-73h-8l11 4s-11 0-11 7c24-1 35 5 35 5" fill="#ddd"/><path d="M25 95S1 57 1 32c0-47 31-7 31-44S1-58 1-58c-15-19-44-15-44-15l7 4s-7 2-9 4 19-3 28 5c-37 3-31 33-31 33l21 120"/><path d="M25-1l38-10c34 5-29 24-33 23C0 7 9 32 45 24s9 20-24 9C-26 20-1-3 25-1" fill="#fc0"/><path d="M15 78l2-3c22 8 23 11 22-9s0-20-23-3c0-5-13-3-15 0-21-9-23-12-22 2 2 29 1 24 21 14" fill="#6b5"/><path d="M-1 67v12c1 2 17 2 17-2s-8 3-13 1-2-13-2-13" fill="#4a4"/><path d="M-23-32c-5-6-18-1-15 7 1-4 8-10 15-7m32 0c1-6 11-7 14-1-4-2-10-2-14 1m-33 16a2 2 0 1 1 0 1m-8 3a7 7 0 1 0 0-1m52-6a2 2 0 1 1 0 1m-6 3a6 6 0 1 0 0-1" fill="#148"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "duckduckgo"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
