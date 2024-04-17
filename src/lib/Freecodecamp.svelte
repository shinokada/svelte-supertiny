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
    ariaLabel =  "freecodecamp" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="M377 129c-2 0-3 3-3 4 0 3 4 8 11 16 29 28 45 62 44 103 0 46-17 84-47 111-6 6-9 10-9 15l4 4a9 9 0 0 0 5 4c7 0 17-8 29-25 25-30 36-63 37-109 0-46-13-77-42-109-10-11-18-17-24-17-2 0-4 1-5 3zm-88 131c-11-2 33-56-47-119 0 0 11 33-42 108-52 75 23 118 23 118s-36-19 7-87c7-11 17-22 29-49 0 0 11 16 5 48-9 50 36 37 37 37 16 18-13 51-14 52s81-51 22-128c-4 5-10 23-21 20zm-154-131a7 7 0 0 1 3 4c0 3-3 8-12 16a138 138 0 0 0-43 103c0 46 16 82 46 111 7 6 9 11 9 14l-3 5a9 9 0 0 1-5 4c-8 0-17-9-30-25a165 165 0 0 1-36-109c0-46 13-77 41-109 11-11 19-17 25-17 2 0 4 1 5 3z"/>
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