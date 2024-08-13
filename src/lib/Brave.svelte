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
    ariaLabel =  "brave" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><linearGradient id="a"><stop offset="0" stop-color="#f50"/><stop offset="1" stop-color="#f20"/></linearGradient><path d="M416 158l9-23c-24-25-33-43-72-34l-35-40H194l-35 40c-38-3-45 6-72 34l10 23-12 34 39 150c8 32 14 45 37 61l72 49c7 4 16 12 23 12 8 0 16-8 23-12l72-49c23-16 29-29 37-61l40-150" fill="url(#a)"/><path d="M343 127s45 54 45 66c-3 21-30 42-45 57-17 16 6 35-3 51-6 12-17 20-24 19-15-8-53-21-55-40 2-18 42-22 44-36 0-13-18-31-17-44 8-14 44-24 59-29 2-2 2-3-6-3-17-2-52-3-66 8-4 16 17 68 4 71-19 5-26 3-45 0-13-8 11-52 3-71-19-12-45-11-66-8-7 0-8 1-6 3 14 7 57 14 59 29 1 17-17 29-17 44 7 15 43 20 45 35-7 20-38 36-55 41-7 1-18-7-25-19-10-20 14-38-3-51-13-15-45-41-45-57 0-12 45-66 45-66l43 7c5 0 17-5 27-8s17-3 17-3 7 0 17 3 22 8 27 8l43-7m-35 216-52 39c-18-12-37-28-52-39-8-9 13-15 22-20 10-5 20-9 30-11 10 3 20 6 30 11 9 4 30 13 22 20" fill="#fff"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "brave"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
