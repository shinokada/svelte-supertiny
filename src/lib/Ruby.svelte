<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'ruby',
    class: classname,
    title,
    desc,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label={ariaLabel}
  {role}
  viewBox="0 0 512 512"
  fill="url(#a)"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><linearGradient id="a" x2=".2" y2="1"
    ><stop offset=".2" stop-color="#fff" /><stop offset=".4" stop-color="#d53" /><stop
      offset=".6"
      stop-color="#b10"
    /></linearGradient
  ><linearGradient id="b" y1="1"
    ><stop offset="0" stop-color="#fff" /><stop offset=".1" stop-color="#d32" /><stop
      offset=".2"
      stop-color="#800"
    /><stop offset="1" stop-color="#d20" /></linearGradient
  ><path fill="#810" d="m154 430 257-17V248" /><path
    fill="#b10"
    d="m411 413-164-13 81-61zl-22-152 41-100"
  /><path
    fill="#900"
    d="m81 360q2 72 73 70c129-8 266-167 276-269q6-68-55-78l-54 30s-11 194-218 204"
  /><path d="m81 360 5-97 19 54" /><path d="m105 317 49 113 40-133" /><path
    d="m194 297 100-94 34 137"
  /><path d="m294 203 27-90 101 82" /><g fill="url(#b)"
    ><path d="m155 157a62 139 45 101-1.02" /><path d="m375 83h-96l42 30zl300-600" /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'ruby'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
