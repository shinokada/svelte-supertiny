<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let fill = ctx.fill || '#fff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Ruby"
  {role}
  width={size}
  height={size}
  {...$$restProps}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 512 512"
  fill="url(#a)"
  ><path d="m0 0H512V512H0" {fill} /><linearGradient id="a" x2=".2" y2="1"
    ><stop offset=".2" stop-color="#fff" /><stop offset=".4" stop-color="#d53" /><stop
      offset=".6"
      stop-color="#b10"
    /></linearGradient
  ><linearGradient id="b" y1="1"
    ><stop offset="0" stop-color="#fff" /><stop offset=".1" stop-color="#d32" /><stop
      offset=".2"
      stop-color="#800"
    /><stop offset="1" stop-color="#d20" /></linearGradient
  ><path fill="#810" d="m154 430 257-17V248" /><path
    fill="#b10"
    d="m411 413-164-13 81-61zl-22-152 41-100"
  /><path
    fill="#900"
    d="m81 360q2 72 73 70c129-8 266-167 276-269q6-68-55-78l-54 30s-11 194-218 204"
  /><path d="m81 360 5-97 19 54" /><path d="m105 317 49 113 40-133" /><path
    d="m194 297 100-94 34 137"
  /><path d="m294 203 27-90 101 82" /><g fill="url(#b)"
    ><path d="m155 157a62 139 45 101-1.02" /><path d="m375 83h-96l42 30zl300-600" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let fill = ctx.fill || '#fff';
-->
