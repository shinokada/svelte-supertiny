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
    ariaLabel =  "taiga" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="M393 119l-17 119L256 256l17-120z" opacity=".8" fill="#a295ae"/><path d="M120 393l17-119 119-17-17 120z" opacity=".8" fill="#5d6f6d"/><path d="M120 119l119 17 17 120-120-17z" opacity=".8" fill="#8cd592"/><path d="M393 392l-119-17-17-120 120 17z" opacity=".8" fill="#665e74"/><path d="M450 255l-96 72-96-72 96-72z" opacity=".8" fill="#837193"/><path d="M256 62l72 96-72 96-72-96z" opacity=".8" fill="#a2f4ac"/><path d="M63 256l96-72 96 72-96 72z" opacity=".8" fill="#7ea685"/><g fill="#3c3647"><path d="M256 449l-72-96 72-96 72 96z" opacity=".8"/><path d="M256 210l46 46-46 46-46-46z"/></g>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "taiga"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
