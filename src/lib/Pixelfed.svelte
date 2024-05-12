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
    ariaLabel =  "pixelfed" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><g fill="#f72"><path id="a" d="M254 256c32-42 23-102-20-134s-108-15-140 27l11-19c52-63 143-89 210-58 50 17 78 72 62 123s-72 78-123 61"/></g><use href="#a" transform="rotate(72 256 256)" fill="#1c3"/><use href="#a" transform="rotate(144 256 256)" fill="#08f"/><use href="#a" transform="rotate(216 256 256)" fill="#a3c"/><use href="#a" transform="rotate(288 256 256)" fill="#e15"/><path d="M101 142l1-1c32-42 93-51 135-19s50 91 18 133a96 96 0 00-15-17 84 84 0 00-117-115 87 87 0 00-22 19z" opacity=".3" id="b"/><g id="c"><use href="#b" transform="rotate(72 256 256)"/><use href="#b" transform="rotate(144 256 256)"/></g><use href="#c" transform="rotate(144 256 256)"/><path d="M241 297h35c33 0 60-26 60-58s-27-58-60-58h-51a34 34 0 00-34 33v131z" fill="#fff"/><circle cx="256" cy="256" r="196" fill="none" stroke="#fff" stroke-width="8"/>
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
@prop ariaLabel =  "pixelfed"
@prop class: classname
@prop withEvents = ctx.withEvents || false
@prop title
@prop desc
@prop ...restProps
-->
