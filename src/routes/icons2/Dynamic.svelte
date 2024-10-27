<script lang="ts">
  import type { Component } from 'svelte';
  import * as components from '$lib';

  type ComponentEntry = [string, Component];

  // Use $derived instead of $ prefix
  const componentEntries = $derived(Object.entries(components) as ComponentEntry[]);

  function getComponentName(path: string): string {
    return path.split('/').pop()?.replace('.svelte', '') ?? '';
  }
</script>

<div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each componentEntries as [path, Component]}
    <div class="rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow hover:shadow-md">
      <h3 class="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
        {getComponentName(path)}
      </h3>
      <div class="rounded-md bg-white p-2">
        <Component size="64" />
      </div>
    </div>
  {/each}
</div>
