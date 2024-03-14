<script lang="ts">
  import type { ComponentType } from 'svelte';
  interface Props {
    icon: ComponentType;
    size?: number;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {
    icon,
    size = 24,
    role = 'img',
    ariaLabel = 'Icon',
    class: classname,
    ...restProps
  } = $props<Props>();
</script>

<svelte:component
  this={icon}
  {...restProps}
  {role}
  {size}
  class={classname}
  aria-label={ariaLabel}
/>
