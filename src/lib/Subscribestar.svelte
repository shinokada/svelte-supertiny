<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    fill?: string;
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
    fill?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Subscribestar,',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="SubscribeStar"
  {role}
  viewBox="0 0 512 512"
  {fill}
  ><path d="m0 0H512V512H0" /><circle cx="256" cy="256" r="192" fill="#098" /><path
    fill="#d64081"
    d="m163 251q-3 8-5 20 9 53 77 53"
  /><path
    d="m160 182v35c0 90 52 108 101 108s103-43 95-121-73-104-105-140q-33-1-76 17c39 63 85 67 111 123h-61v-22"
  /><path fill="#dbb3cd" d="m256 257q25 2 25 37v29l7-2v-64" /><path
    fill="#f48"
    d="m158 271c-17 103 65 138 102 177q38 0 76-17.5C308 381 256 364 235 324q-56-4-77-53m196 24c0-54-30-122-129-103v22c0 37 14 43 31 43s31 5 31 39v34h67"
  /></svg
>
