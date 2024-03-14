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
    ariaLabel = 'Intercom,',
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
  aria-label="Intercom"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#0E24D1" /><path
    {fill}
    d="M139 105a38 38 0 00-38 38v228a38 38 0 0038 38h228A38 38 0 00405 371V143a38 38 0 00-38-38"
  /><path
    fill="none"
    stroke="#0E24D1"
    stroke-width="20"
    stroke-linecap="round"
    d="M151 327c52 41 157 41 203 0M152 181v91m203 0v-91M202 161v135m102 0v-135m-51-5v146"
  /></svg
>
