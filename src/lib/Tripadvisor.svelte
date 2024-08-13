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
    ariaLabel =  "tripadvisor" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path fill="#fcc40f" stroke="#000a12" stroke-width="17" d="M93 202a195 151 0 0 1 326 0v56h-326"/><g transform="translate(256 257)"><g id="a" fill="#000a12"><path d="M2 0h-33v45l31 47M-173-49c3-12-19-46-19-48h77"/><circle cx="-97" cy="0" r="97"/><circle cx="-97" cy="0" r="78" fill="#fff"/><circle cx="-97" cy="0" r="50"/><circle cx="-97" cy="0" r="33" fill="#fff"/></g><use xlink:href="#a" transform="scale(-1 1)"/><circle cx="-97" cy="0" r="17" fill="#ef6a45"/><circle cx="97" cy="0" r="17" fill="#00b087"/></g>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "tripadvisor"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
