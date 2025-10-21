<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    class: classname,
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  {role}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    id="a"
    fill="#0C479C"
    d="M386.944 198.125c-3.8972.7349-14.4175 20.8193-12.4967 59.332 1.2281 24.6254 3.2578 43.6942 17.7911 56.4609H334.8096c14.9418-13.014 15.9758-40.6409 15.8291-56.5351-.235-25.4549-6.9725-46.3612-14.1397-54.6718a71 71 44 1150.445-4.586"
  /><path
    id="b"
    fill="#fff"
    d="M312.5 94.6c20.8-22.6 54-26 74-7.2-15.7-10-35-3.6-49.8 5.7 10.9 11-.8 29-14.7 24.1-5.3-1.9-9 2.3-10.2 3.8-9.8 18.5-10.2 38.1-.4 47.5-19.6-18.8-19.2-51.6 1.1-73.9"
  /><use href="#a" transform="rotate(120,290,258)" /><use
    href="#a"
    transform="rotate(-120,290,258)"
  /><use href="#b" transform="translate(-205 130)" /><use href="#b" transform="translate(11 248)" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop class: classname
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
