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
    ariaLabel =  "element" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><circle cx="256" cy="256" r="192" fill="#0dbd8b"/><path d="m153.2 277.1c0.5-46.4 37.8-81.6 81.6-81.6m0-42.3c46.4 0.5 81.6 37.8 81.6 81.6m42.3 0c-0.5 46.4-37.8 81.6-81.6 81.6m0 42.3c-46.4 0-81.6-37.8-81.6-81.6" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="28.155"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "element"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
