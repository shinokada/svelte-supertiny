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
  <path fill="#fff" d="M0 0h512v512H0z" /><path
    fill="red"
    fill-rule="evenodd"
    d="M124.917 103.416c-3.296 4.189-3.317 5.048-3.293 138.8.014 74.02.554 135.376 1.2 136.344 2.934 4.394 8.984 5.44 31.47 5.44H177.6V155.2h70c74.656.146 76.818.347 86.453 8.165 2.6 2.109 6.801 7.075 9.337 11.035l4.61 7.2v121.602l-4.573 7.227c-5.382 8.505-13.712 14.904-22.627 17.377-6.91 1.917-77.6 2.567-77.6.712 0-.593 5.187-10.673 11.528-22.4l11.528-21.318h14.226c25.139 0 27.217-3.738 26.436-47.573l-.518-29.174-5.229-5.226-5.227-5.227H220v185.6h140.8l8.874-4.162c16.336-7.662 27.96-20.806 32.641-36.91 2.272-7.816 2.528-20.306 2.135-103.906L404 143.2l-4.162-8.874c-5.219-11.124-12.088-19.012-22.224-25.516-15.028-9.645-13.961-9.57-137.097-9.59H128.232z"
  />
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
