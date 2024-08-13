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
    ariaLabel =  "olympics" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><g stroke-width="11.4" stroke="#000" fill="none"><circle cx="115.6" cy="226" r="59.1" stroke="#0081c8"/><circle cx="256" cy="226" r="59.1"/><circle cx="396.4" cy="226" r="59.1" stroke="#ee334e"/><circle cx="185.8" cy="286" r="59.1" stroke="#fcb131"/><circle cx="326.2" cy="286" r="59.1" stroke="#00a651"/><path d="m162.9 190.5a59.1 59.1 90 010 70.9" stroke="#0081c8"/><path d="m303.3 190.5a59.1 59.1 90 010 71M256 285.1a59.1 59.1 90 01-35.5-11.8"/><path d="m396.4 285.1a59.1 59.1 90 01-35.5-11.8" stroke="#ee334e"/></g>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "olympics"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
