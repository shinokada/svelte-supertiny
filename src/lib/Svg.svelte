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
    ariaLabel =  "svg" , 
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
  <path d="m0 0H512V512H0" fill="#fff"/><path d="m64 256h384v136a56 56 0 01-56 56H120a56 56 0 01-56-56"/><path d="m290 174v-28a43 43 90 10-68 0v28l-20-20a43 43 90 10-48 48l20 20h-28a43 43 90 100 68h28l-20 20a43 43 90 1048 48l20-20v28a43 43 90 1068 0v-28l20 20a43 43 90 1048-48l-20-20h28a43 43 90 100-68h-28l20-20a43 43 90 10-48-48z" fill="#ffb13b" stroke="#000" stroke-width="25.5"/><path fill="#000000d9" d="M87 256H424v167H87"/><path fill="none" stroke="#fff" stroke-width="29" d="m121 387a35 35 0 1063-21c-19-23-37-5-56-28a35 35 0 1163-21m29-55 36 172 36-172m98 55a35 35 0 00-70 0v70a35 35 0 0070 0v-35h-35"/><path d="M99 258H307v9H99" fill="#271b09"/>
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