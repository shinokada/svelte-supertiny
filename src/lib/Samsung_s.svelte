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
    ariaLabel =  "samsung_s" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="M292.6 332.2c3.5 8.6 2.4 19.7.8 26.4-3 11.8-11 23.9-34.6 23.9-22.3 0-35.9-12.8-35.9-32.3v-34.4h-95.5v27.5c0 79.3 62.5 103.3 129.4 103.3 64.4 0 117.4-22 125.8-81.3 4.3-30.7 1.1-50.9-.4-58.5-15-74.5-150.1-96.8-160.2-138.4-1.7-7.1-1.2-14.7-.4-18.8 2.5-11.3 10.2-23.8 32.5-23.8 20.8 0 33.1 12.9 33.1 32.3v22h88.7v-25c0-77.6-69.6-89.6-120-89.6-63.3 0-115 20.9-124.5 78.8-2.6 16-2.9 30.2.8 48.1 15.6 72.6 141.9 93.7 160.3 139.8z" fill="#034ea2"/>
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
@prop ariaLabel =  "samsung_s"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
