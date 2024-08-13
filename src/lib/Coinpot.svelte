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
    ariaLabel =  "coinpot" , 
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
  <path d="m0 0H512V512H0" fill="#e0e0e0"/><defs><g id="c"><path d="M0 0h84v13Q42 18 0 13" fill="#ffd54e"/><ellipse cx="42" rx="42" ry="3" fill="#c6a900"/></g></defs><g transform="translate(78,255)"><g id="s"><use href="#c"/><use y="18" href="#c"/><use y="36" href="#c"/><use y="54" href="#c"/><use y="72" href="#c"/></g></g><use x="174" y="202" href="#s"/><use x="174" y="256" href="#s"/><use x="269" y="173" href="#s"/><use x="269" y="245" href="#s"/><path d="M62 328C152 366 261 332 385 233v150H62" fill="#e0e0e0"/><path d="M62 335C152 373 261 339 385 240l-13-10l77-28l-17 73l-13-11C203 413 132 367 62 335" fill="#03a9f3"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "coinpot"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
