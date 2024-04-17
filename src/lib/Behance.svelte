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
    ariaLabel =  "behance" , 
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
  <path d="m0 0H512V512H0" fill="#4175fa"/><path d="m346.1 211.9c-73.4 0-73.5 73.1-73.5 73.5 0 0-5 73.2 73.5 73.2 0 0 65.5 3.7 65.5-50.9h-33.6s1.1 20.6-30.7 20.6c0 0-33.6 2.2-33.6-33.2h99.1s10.9-83.1-66.6-83.1zm-32.9 57.5s4.1-29.4 33.6-29.4c29.6 0 29.1 29.4 29.1 29.4h-62.8zm-84-18.8s29.1-2.1 29.1-36.4c0-34.2-23.8-50.9-54.1-50.9h-99.6v191.4h99.5s60.8 1.9 60.8-56.5c0 0 2.6-47.5-35.8-47.5zm-80.6-53.4h55.7s13.5 0 13.5 19.9-7.9 22.8-16.9 22.8h-52.2v-42.7zm52.9 123.4h-52.9v-51.2h55.7s20.2-0.2 20.1 26.4c0 22.4-15 24.7-22.9 24.9zm103.5-146.1v23.6h79v-23.6h-79z" fill="#fff"/>
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