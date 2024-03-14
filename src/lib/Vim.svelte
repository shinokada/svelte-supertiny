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
    ariaLabel = 'Vim,',
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
  aria-label="Vim"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><g transform="matrix(5.75 0 0 5.75 83.5 83.5)"
    ><path d="m30 0-30 30 30 30 30-30z" fill="#007f00" stroke="#000" stroke-width=".8" /><g
      fill="#bfbfbf"
      ><g stroke="#000" stroke-width="2.5"
        ><path
          id="a"
          d="m8 5-2 2v4l2 1h2v40l3 2h3l43-44v-3l-2-2h-17l-2 2v4l2 1h2l-1 1-17 16v-17h2l2-1v-4l-2-2z"
        /></g
      ><use xlink:href="#a" /><g stroke="#000" stroke-width="2.5"
        ><path
          id="b"
          d="m31 36h3v3h-3zm-.5 6-.5-1h4l-4 11.5h1v1.5h-5v-1.5h1zm7.5-1h5l1 1 1-1h4l1 1 1-1h5l1 1v3l-3 7.5h1v1.5h-5v-1.5h1l3-7.5h-5l-3 7.5h1v1.5h-5v-1.5h1l3-7.5h-5l-3 7.5h1v1.5h-5v-1.5h1l3.5-10.5z"
        /></g
      ><use xlink:href="#b" /></g
    ></g
  ></svg
>
