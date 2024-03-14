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
    ariaLabel = 'Endeavouros,',
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
  aria-label="Endeavour OS"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M285 111.36c31 44.7 161.53 217.54 72.62 253.57-41.53 19.47-230.76-11.43-228-6.38l-24.37 41.01s145.92 6.7 258.6-8.8c160.85-22-33.12-232.1-78.73-279.2z"
    fill="#7f7fff"
  /><path
    d="M285 111.36C274.7 112.81 85.47 350.38 85.47 350.38s13.65 3.95 44.66 8.52c10-7.97 151.35-250.8 155.43-247.33-.1-.1-.2-.13-.36-.11z"
    fill="#ff7f7f"
  /><path
    d="M285 111.36C278.5 110.28 129.6 358.7 129.6 358.7s135.06 14.55 190.71 13.58c156.78-2.7 1.2-212-35-261.18a.3.3 0 0 0-.17-.1z"
    fill="#7f3fbf"
  /></svg
>
