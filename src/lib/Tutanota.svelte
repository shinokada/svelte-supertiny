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
    ariaLabel =  "tutanota" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="m113 97c-17 0-31 14.1-31.5 31.5v290.5c0 1.1 0.1 2.2 0.2 3.3a1700 1700 0 0 0 37-14c91-36 165-67 165-102 0-1.1-0.1-2.2-0.2-3.4-4.7-34.5-87.2-45-87-61 0-0.8 0.2-1.7 0.8-2 9-17 49-16 63-17s48-1 50-11.3c0-0.3 0.1-0.6 0.1-1 0-9-23-13-23-13s28 4 28 15c0 0.5-0.1 1.1-0.2 1.7-3.1 11-28 14-44 14-15.6 0.8-39 2-39 10.2-0 0.4 0.1 0.9 0.2 1 3 11 90 16 146 45 32 16 48 44 55 73v-229.5c0-17-14-31-31-31h-289.4z" fill="#a01e20"/>
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