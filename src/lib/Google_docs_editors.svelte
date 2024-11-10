<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'google_docs_editors',
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
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M131.5 344h83V170h83V84h-136q-30 0-30 30"
    fill="#ffba00"
  /><path d="M297.5 84v86h83" fill="#ea4335" /><path
    d="M297.5 170h83v174h-83"
    fill="#2684fc"
  /><path d="M131.5 342v56q0 30 30 30h55v-86" fill="#00832d" /><path
    d="M214.5 342h85v86h-85"
    fill="#00ac47"
  /><path d="M297.5 342h83v56q0 30-30 30h-53" fill="#0066da" />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'google_docs_editors'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
