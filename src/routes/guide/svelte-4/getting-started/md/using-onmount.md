<script>
  import { Cib500px } from 'svelte-coreui-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    class: '#ff0000',
    fill: 'currentColor',
  };
  onMount(() => {
    const icon = new Cib500px({ target: document.body, props });
  });
</script>