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
    ariaLabel =  "firefox" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><linearGradient id="a" x1=".7" x2=".3" y2=".8"><stop offset=".3" stop-color="#fd5"/><stop offset=".6" stop-color="#f85"/><stop offset="1" stop-color="#d06"/></linearGradient><radialGradient id="b" cx=".4" cy=".7"><stop offset=".4" stop-color="#74d"/><stop offset="1" stop-color="#a2d"/></radialGradient><linearGradient id="c" x1=".8" y1=".2" x2=".4" y2=".8"><stop offset=".2" stop-color="#fd5"/><stop offset="1" stop-color="#f33"/></linearGradient><g transform="scale(4)"><path d="M48 49s-3-9-1-16c-9 2-33 35-33 35a51 48 0 1087-32s5 9 5 15c-3-9-20-25-26-37-24 13-16 39-16 39" fill="url(#a)"/><circle cx="64" cy="67" r="26" fill="url(#b)"/><path d="M21 45l43 12c-6 11-16 3-23 14a22 22 0 1034-20s33 3 17 42H28m36 25h1" fill="url(#a)"/><path d="M35 43c16 0 12 7 29 14-18 6-23-9-38 0 5 9 12 8 12 8 1 43 72 29 67-17a50 46.6 47 01-88 33c-9-18-1-40 16-51" fill="url(#c)"/></g>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "firefox"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
