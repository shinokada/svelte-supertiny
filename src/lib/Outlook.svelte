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
    ariaLabel =  "outlook" , 
    class: classname, 
    withEvents = ctx.withEvents || false,
    title = {},
    desc = {},
    ...restProps }: Props = $props();

    let ariaDescribedby = $state(`${title.id || ''} ${desc.id || ''}`);
    let hasDescription = $state(false);
    $effect(() => {
      if (title.id || desc.id) {
        hasDescription = true;
      } else {
        hasDescription = false;
      }
    })
</script>

{#snippet svgContent()}
  <path d="m0 0H512V512H0" fill="#fff"/><rect width="231" height="270" x="168" y="107" fill="#05a" rx="3%"/><path fill="#136" d="M398 247v23l15-8s0-7-5-9l-10-6zm-230 43v70h77v-70h-77z"/><path fill="#17d" d="M168 150v70h77v-70h-77zm77 70v70h77v-70h-77zm77 70v70h77v-70h-77z"/><path fill="#3ae" d="M245 150v70h77v-70h-77zm77 70v70h77v-70h-77z"/><path fill="#5cf" d="M322 150h77v70h-77z"/><path fill="#19e" d="M413 261v128c0 7-2 15-7 18-3 2-124-71-124-71l131-75z"/><path fill="#2ae" d="M160 266c-4 3-6 7-6 12v117c0 8 6 14 14 14h230c4 0 5 0 8-2"/><rect width="172" height="172" x="70" y="172" fill="#18e" rx="3%"/><path fill="#fff" d="M154 305c-23 0-43-18-43-45 0-28 16-48 44-48 27 0 43 21 43 46 0 29-18 47-44 47zm1-75c-16 0-23 14-23 29 0 18 11 28 22 28 14 0 23-10 23-28s-8-29-22-29z"/>
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
  {#if title.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc.id && desc.desc}
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
  {#if title.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  {@render svgContent()}
  </svg>
{/if}