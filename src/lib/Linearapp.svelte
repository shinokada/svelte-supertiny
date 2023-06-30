<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Linear App"
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
  ><rect width="512" height="512" fill="#fff" /><path
    fill="#5E6AD2"
    d="M416 443C421 439 425 435 429 430 526 333 526 177 429 80 332-17 175-17 78 80 74 85 70 89 67 93L416 443Z M386 465 45 123C38 134 32 145 27 157L353 483C365 478 375 472 386 465Z M315 495 14 194C10 209 8 224 7 239L270 502C285 501 300 499 315 495ZM216 500 9 293C17 344 40 391 78 431 118 469 167 492 216 500Z"
  /></svg
>
<!--
@component
[Go to Document](https://shinokada.github.io/svelte-supertiny/)
## Props
@prop size = '24';
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
