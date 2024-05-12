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
    ariaLabel =  "powershell" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><linearGradient id="b" x1="0" x2=".9" y1=".2" y2=".73"><stop stop-color="#c7e6ff" offset="0"/><stop stop-color="#a9c8ff" offset="1"/></linearGradient><linearGradient id="a" x1="0" x2=".9" y1=".2" y2=".73"><stop stop-color="#2d4664" offset="0"/><stop stop-color="#29405b" offset=".17"/><stop stop-color="#1e2f43" offset=".45"/><stop stop-color="#0c131b" offset=".8"/><stop offset="1"/></linearGradient><g transform="skewX(-13)"><rect x="143" y="104" width="344" height="304" rx="21" fill="url(#b)" opacity=".8"/><rect x="148" y="107.5" width="334" height="297" rx="17" fill="url(#a)"/></g><use xlink:href="#c" x="3" y="3.5" stroke="#2c5591"/><g stroke="#fff"><g id="c" fill="none" stroke-linecap="round"><path d="m195 155 91 97m0 0-139 100" stroke-width="35"/><path d="m254 349h74" stroke-width="30"/></g></g>
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
@prop ariaLabel =  "powershell"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
