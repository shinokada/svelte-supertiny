<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'wifi',
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
    d="M150 160a142 142 0 01212 0ZM362 351a142 142 0 01-212 0Zm78-117a56 56 0 00-56-56H321a56 56 0 00-56 56v43a56 56 0 01-56 56H384a56 56 0 0056-56Zm-220 4v60h18V238ZM98 211l23 87h15l18-60 17 60h16l23-87H193l-14 58-17-58H147l-17 56-13-56Zm261 0v17H312v18h44v18H312v34H293V211Zm31 27v60H372V238Zm-7-66a63 63 0 0163 63v41a63 63 0 01-63 63H129A63 63 0 0166 276V235a63 63 0 0163-63ZM240 219a11 11 0 100 1Zm152 0a11 11 0 100 1Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'wifi'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
