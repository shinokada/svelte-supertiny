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
    ariaLabel =  "cplusplus" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path fill="#004482" d="M270.3 445l141.1-81.4a30 30 0 0010.4-11l-166.3-96-166.3 96a30 30 0 0010.4 11L240.8 445a30 30 0 0029.5 0z"/><path fill="#659AD2" d="M421.8 160.5a30 30 0 00-10.4-11L270.3 68a30 30 0 00-29.6 0l-141 81.5a30 30 0 00-14.8 25.6V338a30 30 0 004.3 14.6z"/><circle cx="256" cy="256" r="86" fill="none" stroke="#fff" stroke-width="57"/><path fill="#00599C" d="M421.8 352.6a30 30 0 004.3-14.6V175.2a30 30 0 00-4.3-14.7l-166.3 96.1z"/><path stroke="#fff" stroke-width="13" d="M350.5 237 v39 M331,257 h39 M397.5 237 v39 M378,257 h39"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "cplusplus"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
