<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Sublimetext,',
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
  aria-label="Sublime Text"
  {role}
  viewBox="0 0 512 512"
  fill="#ff9800"
  ><path d="m0 0H512V512H0" fill="#424242" /><g transform="skewY(-17.5)"
    ><rect x="110" y="375" width="292" height="107" rx="8" fill="url(#g)" /><rect
      x="110"
      y="191"
      width="292"
      height="107"
      rx="8"
    /></g
  ><rect transform="skewY(17.5)" x="110" y="122" width="292" height="107" rx="8" /><linearGradient
    id="g"
    x1=".6"
    x2=".7"
    y1=".6"
    y2=".54"
    ><stop stop-color="#ff9700" offset="0" /><stop stop-color="#f48e00" offset=".5" /><stop
      stop-color="#d06f00"
      offset=".9"
    /></linearGradient
  ></svg
>
