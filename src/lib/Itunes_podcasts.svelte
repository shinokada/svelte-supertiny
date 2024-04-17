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
    ariaLabel =  "itunes_podcasts" , 
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
  <path d="m0 0H512V512H0" fill="url(#t)"/><defs><linearGradient id="t" y1="100%" x2="0"><stop stop-color="#832bc1" offset="0"/><stop offset="1" stop-color="#f452ff"/></linearGradient></defs><path d="M293 294c-8-8-21-13-37-13s-29 5-37 13c-4 5-6 9-7 15-1 12 0 22 1 39a891 891 0 0 0 13 87c3 9 14 18 30 18 17 0 27-9 30-18a891 891 0 0 0 14-126c-1-6-3-10-7-15zm-79-72a42 42 0 1 0 84 0 42 42 0 0 0-84 0zm42-165a180 180 0 0 0-60 350c2 0 4-1 4-3l-3-18c0-3-2-4-4-5a157 157 0 1 1 126 0c-2 1-4 2-4 5l-3 18c0 2 2 3 4 3a180 180 0 0 0-60-350zm-4 82a98 98 0 0 1 71 169c-2 1-3 4-2 6l-1 20c0 2 2 4 4 2a121 121 0 1 0-136 1c2 1 4-1 4-3v-20c0-2-1-5-3-6a97 97 0 0 1 63-169z" fill="#fff"/>
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