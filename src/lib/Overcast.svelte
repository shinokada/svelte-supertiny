<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'overcast',
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
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><g fill="none" stroke="#fc7e0f"
    ><circle cx="255" cy="255" r="175" /><path
      d="m160 181.1s-24.2 27.3-24.2 75S160 330 160 330"
    /><path d="M352.8 330S377 303.8 377 256.1s-24.2-75-24.2-75" /><path
      d="M314.4 298.3s15.2-15 15.7-42.3c.4-22.7-15.9-43-15.9-43"
    /><path d="M197.6 298.3s-15.2-15-15.7-42.3c-.4-22.7 15.9-43 15.9-43" /></g
  ><g fill="#fc7e0f"
    ><circle cx="255" cy="255" r="32" /><path d="m260.4 284.9-22.7-6.1L199.9 420l22.7 6.1z" /><path
      d="M289.2 426l22.6-6-37.6-141.3-22.6 6Z"
    /><path d="m230.6 360.9 8.4-8.6 58.2 56.7-8.4 8.6z" /><path
      d="m279.9 361.2-7.6-7.7-57.7 57.3 7.6 7.7z"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'overcast'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
