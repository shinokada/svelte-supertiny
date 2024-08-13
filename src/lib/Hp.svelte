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
    ariaLabel =  "hp" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path fill="#0096d6" d="M256 64c-2.9 0-5.8 0-8.6.2l-39.3 108h34.2c20.3 0 31.3 15.6 24.3 34.8l-48.4 133h-40.7l52-142.6H199L147 340h-40.6l61-168 36.9-101a192 192 0 0 0 7.2 371.7l35.7-98 62.8-172.7h75c20.3 0 31.3 15.7 24.3 34.9l-42.5 116.9a26.5 26.5 0 0 1-23.2 16.2h-54l-39.2 107.8 5.7.1a192 192 0 0 0 0-384zm85.6 133.3l-42.8 117.4h30.6l42.8-117.4z"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "hp"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
