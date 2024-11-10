<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'f droid',
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
  fill="#fff"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" /><g transform="translate(104 108)"
    ><g id="i"
      ><path fill="#681" d="m-27-34q-5 7 2 15L2 16h7" /><path
        fill="#9b0"
        d="M18 4-9-31q-8-11-17-4c-5 5-3 6 30 47"
      /></g
    ><use xlink:href="#i" transform="matrix(-1 0 0 1 304 0)" /><rect
      fill="#c6f04c"
      width="304"
      height="48"
      rx="24"
    /><rect y="56" fill="#93c50b" width="304" height="48" rx="24" /><rect
      y="8"
      fill="#aeea00"
      width="304"
      height="88"
      rx="24"
      ry="20"
    /><rect y="112" fill="#4791db" width="304" height="48" rx="24" /><rect
      y="272"
      fill="#1c68b3"
      width="304"
      height="48"
      rx="24"
    /><rect y="120" fill="#1976d2" width="304" height="192" rx="24" ry="22" /><g id="o"
      ><ellipse cx="75" cy="53" rx="27" ry="31" fill="#93c50b" /><circle
        cx="75"
        cy="57"
        r="27"
      /></g
    ><use xlink:href="#o" x="156" /><path
      fill="#0d47a1"
      d="m68 217a84 84 0 100-2m15 0a69 69 0 110 2m21-13a50 50 0 110 24h25a26 26 0 100-24"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'f droid'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
