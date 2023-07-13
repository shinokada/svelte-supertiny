<script>
  import Tabs from 'flowbite-svelte/Tabs.svelte';
  import TabItem from 'flowbite-svelte/TabItem.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';

  import * as Icons from '$lib';

  const contentClass = ' rounded-lg dark:bg-slate-950 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let divClass = 'mx-16';
</script>

<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  {divClass}
>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
    {#each filteredEntries as [name, component]}
      <div class="flex gap-4 items-center text-lg">
        <svelte:component this={component} class="shrink-0 h-12 w-12" />
        {name}
      </div>
    {/each}
  </div>
</TableSearch>
