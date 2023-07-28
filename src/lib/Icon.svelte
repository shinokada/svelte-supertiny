<script>
  import icons from './icons.js'

  export let name;
  export let width = "512";
  export let height = "512";
  export let role = 'img';
  export let ariaLabel = name;

  $: displayIcon = icons[name]
</script>
<svg
xmlns="http://www.w3.org/2000/svg"
class={$$props.class}
{width}
{height}
{role}
aria-label={ariaLabel}
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
viewBox="0 0 {displayIcon.box} {displayIcon.box}"
>
  {@html displayIcon.svg}
</svg>

<!--
@component
[Go to Document](https://shinokada.github.io/svelte-evil-icons/)
## Props
@prop name;
@prop width = '50';
@prop height = '50';
@prop role = 'img';
@prop ariaLabel='icon name'
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->