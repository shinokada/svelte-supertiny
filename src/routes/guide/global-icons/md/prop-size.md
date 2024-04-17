<script>
  import { setContext } from 'svelte';
  import { Svelte } from 'svelte-supertiny';
  const iconCtx = {
    size: '40'
  };
  setContext('iconCtx', iconCtx);
</script>

<Svelte
  title={{ id: 'my-title', title: 'Svelte' }}
  desc={{ id: 'my-descrip', desc: 'The shape of S with orange edge and white background' }}
  ariaLabel="Svelte icon"
/>