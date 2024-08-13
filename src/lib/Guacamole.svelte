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
    ariaLabel =  "guacamole" , 
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
  <path d="m0 0H512V512H0"/><path d="M143 168c-50 25-45 58-35 73 1 14 3 26 3 26 94 78 235 51 291 2 3-9 4-19 6-26 4-13 11-41-12-57l-9 7c25 51-58 82-136 81-78 0-159-42-114-92zm-20 138c35 88 212 104 264 3-91 64-217 38-264-3z" fill="#fff"/><path d="M317 177l9-23c-3-1-14-12-20-12-40 0-36-6-46-7-10 0-16 2-18 3-24 16-35 3-50 15-20 20-24 15-35 22-7 15-12 20-16 31-2 35 70 54 116 53s134-19 116-60c-5 3-27 16-27 15-1-7-2-14-4-16-11-5-11-10-13-15-3-1-12-6-12-6z" fill="#583"/><path d="M334 170c7 3 6 2 9 9s5 0 12 14c35-19 44-30 45-34s-37-31-48-28c-6 6-16 31-18 39z" fill="#db4"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "guacamole"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
