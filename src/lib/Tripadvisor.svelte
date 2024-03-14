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
    ariaLabel = 'Tripadvisor,',
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
  xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-label="TripAdvisor"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#fcc40f"
    stroke="#000a12"
    stroke-width="17"
    d="M93 202a195 151 0 0 1 326 0v56h-326"
  /><g transform="translate(256 257)"
    ><g id="a" fill="#000a12"
      ><path d="M2 0h-33v45l31 47M-173-49c3-12-19-46-19-48h77" /><circle
        cx="-97"
        cy="0"
        r="97"
      /><circle cx="-97" cy="0" r="78" fill="#fff" /><circle cx="-97" cy="0" r="50" /><circle
        cx="-97"
        cy="0"
        r="33"
        fill="#fff"
      /></g
    ><use xlink:href="#a" transform="scale(-1 1)" /><circle
      cx="-97"
      cy="0"
      r="17"
      fill="#ef6a45"
    /><circle cx="97" cy="0" r="17" fill="#00b087" /></g
  ></svg
>
