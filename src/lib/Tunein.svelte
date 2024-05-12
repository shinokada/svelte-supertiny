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
    ariaLabel =  "tunein" , 
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
  <path d="m0 0H512V512H0" fill="#1c203c"/><path fill="#14d8cc" d="M298 152c-6 0-6 6-6 6v34H56c-6 0-6 6-6 6v123c0 6 6 6 6 6h242c6 0 6-6 6-6v-34h137c6 0 6-6 6-6V158c0-6-6-6-6-6H298zm37 40h28v11h-9v34h10v11h-30v-11h9v-34h-8v-11zm37 0h13l12 34v-34h11v56h-12l-13-33v33h-11v-56zM62 204h230v111H62V204zm30 28v11h12v44h11v-44h12v-11H92zm43 0v39s0 17 19 17 19-17 19-17v-39h-11v39s0 6-8 6-8-6-8-6v-39h-11zm47 0v55h11v-31l11 31h14v-55h-12v31l-11-31h-13zm44 0v55h33v-11h-21v-11h20v-11h-20v-11h20v-11h-32z"/>
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
@prop ariaLabel =  "tunein"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
