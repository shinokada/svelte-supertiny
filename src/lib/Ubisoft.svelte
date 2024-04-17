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
    ariaLabel =  "ubisoft" , 
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
  <path d="m0 0H512V512H0"/><path fill="#fff" d="M403 327c-28 63-85 96-146 95-117-6-151-141-73-190l3 4c-85 110 82 216 159 89 63-132-94-262-230-162l-3-3c36-57 106-82 172-65a170 170 0 01118 232zm-110-2a52 52 0 01-89-5c-19-40 8-76 42-77 42-2 59 45 33 72l14 10zm-183-5l-5 2c-45-173 177-218 221-81l-4 2c-66-94-218-61-212 77zm337-64a201 201 0 00-380-89l15 11c-13 29-19 57-19 86 6 128 100 192 194 192 94-1 191-75 190-200"/>
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