<script lang="ts">
  import { Label } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';
  import { Copy } from 'runes-webkit';
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  type IconComponent = [string, any];

  interface Props {
    icons: IconComponent[];
    title: string;
    minSize?: string;
    maxSize?: string;
    defaultSize?: string;
    div3Class?: string;
    variation?: string;
  }

  const {
    icons,
    title,
    minSize = '16',
    maxSize = '48',
    div3Class,
    variation,
    ...restProps
  }: Props = $props();

  let size = $state(24);
  let searchTerm = $state('');

  const filteredEntries = $derived(
    icons.filter(
      ([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()) && name !== 'Icon'
    )
  );
</script>

<div class="w-full pb-20">
  <div class="mx-auto max-w-7xl px-8">
    <h1>{title}</h1>

    <div class="relative overflow-x-auto">
      <div class="w-full p-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <Label class="py-4 text-lg">Icon size: {size}</Label>
        <input
          type="search"
          id="site-search"
          name="q"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search icons"
          bind:value={searchTerm}
        />
        <input
          id="default-range"
          type="range"
          min={minSize}
          max={maxSize}
          bind:value={size}
          class="mt-8 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
        />
      </div>
      <div class="w-full text-left text-gray-500 dark:text-gray-400">
        <div
          class={twMerge(
            'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
            div3Class
          )}
        >
          {#each filteredEntries as [name, Component]}
            <div class="flex flex-wrap items-center">
              <Component size={size.toString()} {variation} {...restProps} />
              <Copy iconName={name}>{name}</Copy>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
