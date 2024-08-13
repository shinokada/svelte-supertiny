<script lang='ts'>
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

    type TitleType = {
    id?: string | undefined | null;
    title?: string | undefined | null;
  };
  type DescType = {
    id?: string | undefined | null;
    desc?: string | undefined | null;
  };
  interface BaseProps extends SVGAttributes<SVGElement>{
    size?: string | undefined | null;
    role?: string | undefined | null;
    color?: string | undefined | null;
    class?: string | undefined | null;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string | undefined | null;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img',  
    ariaLabel =  "nodejs" , 
    class: classname, 
    title,
    desc,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

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
  <path d="m0 0H512V512H0" fill="#fff"/><path fill="#539E43" d="m275 63q-19-12-38 0L95 145q-16 9-16 27v169q0 18 15 27l39 22c32 18 77 12 77-37V188q0-6-6-6h-16q-6 0-6 6v165c0 18-19 24-35 15l-40-23q-2-1-2-4V172q0-3 2-4l146-84q3-2 6 0l145 84q2 1 2 4v168q0 4-2 5l-145 84q-3 2-6 0l-37-22q-2-1-4 0-9 6-22 10-6 2 2 6l49 29q16 8 32 0l146-85q14-9 14-27V174q0-20-16-29M229 281q-5 0-5 5 0 54 79 54c55 0 75-28 71-58s-33-34-69-39-47-7-47-18 4-22 39-22 41 13 44 25q1 5 5 5h18c4 0 5-2 4-9s-3-47-71-47-68 40-68 49 0 36 56 42 63 11 60 27-24 21-60 18-32-27-34-30q-1-2-4-2"/>
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel =  "nodejs"
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
