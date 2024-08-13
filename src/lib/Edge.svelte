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
    ariaLabel =  "edge" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><radialGradient id="a"><stop offset=".8" stop-color="#159"/><stop offset="1" stop-color="#148"/></radialGradient><radialGradient id="b" cy=".7" r=".7"><stop offset=".8" stop-color="#18d"/><stop offset="1" stop-color="#07a"/></radialGradient><radialGradient id="c" cx=".1" cy=".2" r="1"><stop offset=".4" stop-color="#3ce"/><stop offset="1" stop-color="#3c5"/></radialGradient><radialGradient id="d" cx=".9"><stop offset="0" stop-color="#6e7"/><stop offset="1" stop-color="#6e7" stop-opacity="0"/></radialGradient><path d="m233 214s-25 12-25 42a133 112 0 00202 94 6 6 0 019 7C316 514 90 454 187 237" fill="url(#a)"/><path d="m300 153H94a192 192 0 00220 286 116 120.3-2 01-74-228 48 49 0 0164 41" fill="url(#b)"/><path d="m64 253c11-237 336-250 383-45 12 95-76 132-147 102-37-23 23-18-3-88-47-107-229-79-233 31" fill="url(#c)"/><path d="m242 58c251 14 262 290 86 248" fill="url(#d)"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "edge"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
