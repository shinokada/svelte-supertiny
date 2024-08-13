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
    ariaLabel =  "symantec" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path fill="#fdb511" d="M384 124v10h10v-10zm-133 55a96 96 0 1 1-1 0m1-48a144 144 0 1 0 1 0zm164-17v10h10v-10zm0-20v10h10V94z"/><path fill-rule="evenodd" d="M313 235v10c-28 27-34 50-39 71-2 13-2 21-17 23-3 0-10-3-13-8-4-7-15-34-25-50-7-14-18-26-28-38-4-5-6-9-3-13 3-5 6-4 10-3 25 11 39 28 51 52 11-27 17-41 44-74h10v-10h10v-11h10v-10h20v10h-10v-20h10v-10h51v-20h10v10h-50v-10h10v30h10v-40h30v-20h11v10h-31v60h-10v10h-10v11h-10v10h-21v-10h10v20h-10v10h-10v10z"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "symantec"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
