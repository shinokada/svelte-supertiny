<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'glitch',
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
  <path d="m0 0H512V512H0" fill="#d0fff1" /><mask id="m"
    ><path
      id="f"
      d="m240 266q57 3 140-26c31 5 75 32 64 10s-2-24-2-38-8-22-1-33 8-35 4-36-53 22-65 21-38-14-72-19q-10-5-14-12t-39-16-44-10-29 26q-42-2-67 12t-38 28-12 30c23 9 38 12 3 22q7 8 19 15t31 14 48 1q19 40 77 28"
      fill="#fff"
    /><use xlink:href="#f" y="119" /></mask
  ><g mask="url(#m)"
    ><path d="m9 9H448V406H9" fill="#2800ff" /><path
      d="m9 256 207 2v-11h136v12h99V9H9"
      fill="#f79"
    /><g stroke="#2800ff"
      ><g id="a"
        ><path
          d="m183 162q19 30 3 58m17 14c13-41 14-45 2-76m0 0c78 4 112 7 184 41"
          fill="none"
          stroke-linecap="round"
          stroke-width="8"
        /><g stroke="none"
          ><circle cx="131" cy="184" r="18" fill="#fff" /><path
            d="m113 184a14 14 0 110 1m3 5a5 5 0 100-2"
          /></g
        ></g
      ></g
    ><use xlink:href="#a" y="120" stroke="#f79" /><path
      d="m216 258v-11h136v12h99v-55H299v11H9v191H447v-82H247v11H9v-79"
      style="fill:#37b;mix-blend-mode:screen"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'glitch'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
