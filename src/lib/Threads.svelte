<script lang='ts'>
  import { getContext } from 'svelte';

  interface CtxType {
		size?: string;
		role?: string;
    withEvents?: boolean;
	}

  type TitleType = {
    id?: string;
    title?: string;
  };

  type DescType = {
    id?: string;
    desc?: string;
  };

  const ctx: CtxType = getContext('iconCtx') ?? {};

  interface Props{
    onclick?: ()=>void;
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
    withEvents?: boolean;
    title?: TitleType;
    desc?: DescType;
  }
  let { 
    onclick,
    size = ctx.size || '24', 
    role = ctx.role || 'img',  
    ariaLabel =  "threads" , 
    class: classname, 
    withEvents = ctx.withEvents || false,
    title,
    desc,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#snippet svgContent()}
  <path d="m0 0H512V512H0"/><path stroke="#fff" stroke-width="34.5" d="m200.7 200c12.3-18 33.3-32 66.3-29s63 22 61.2 86-29.2 86-67.3 87.4-61-21.5-61.6-45.8 15.2-53.7 79.2-52.6 110.7 30.5 113.7 84-46 108.5-133.2 108-156-50-156.5-179S173 79 256 79s134 41 153.2 111.3"/>
{/snippet}

{#if withEvents}
  <svg xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    class={classname}
    {...restProps}
    aria-label={ariaLabel}
    {role}
    viewBox="0 0 512 512"
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    onclick={onclick}
  >
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  {@render svgContent()}
  </svg>
{:else}
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
  {@render svgContent()}
  </svg>
{/if}

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop onclick
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "threads"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
