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
    ariaLabel =  "json ld" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="m264 191c0.9 18.9-42.5 41.8-60.1 35.4a40.3 40.3 0 1 0 4.4 67.2c15-9.9 60 14.1 60.8 32.1a40.3 40.3 0 1 0 56.8-35.6c-13.4-7.7-14.8-61.4-0.9-69.4a40.3 40.3 0 1 0-61-29.7zm17.7 28.9a40 40 0 0 0 10.6 5c12 11.4 12.9 55.1 0.2 65.4a40 40 0 0 0-9.5 6.1c-11.3 5.7-56.3-15.3-58.6-34.2a40 40 0 0 0-0.5-7.4c0-11.9 40.5-41.3 57.8-34.9z" fill="#0c479c"/><path id="a" d="M279 206c-8-9-3-22 0-27 1-1 3-3 5-2a9 9 0 0010-14c8-5 20-9 29-3-14-12-33-7-43 4s-13 32-1 43" fill="#fff"/><use x="7" y="141" href="#a"/><use x="-119" y="76" href="#a"/><g id="c"><path id="b" d="m55 256v11c27 0 47-1 47 41v37c0 49 15 56 74 56v-22c-15 0-33 0-39-6-5-7-6-14-6-29v-38c0-22-3-43-31-50h-45z"/><use transform="scale(1 -1)" y="-512" href="#b"/></g><use transform="scale(-1 1)" x="-512" href="#c"/>
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
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop onclick
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "json ld"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
