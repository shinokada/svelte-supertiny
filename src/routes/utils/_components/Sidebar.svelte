<script lang="ts">
  
  import {
    Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper
  } from 'svelte-5-ui-lib';

  import {
    ChevronDownSolid,
    ChevronUpSolid,
    WandMagicSparklesOutline,
    StarOutline,
    CogOutline,
    GridPlusOutline,
    GithubSolid,
    FileChartBarOutline,
    ExpandOutline,
   
  } from '../icons';

  // export let drawerHidden: boolean = false;
  const spanclass = 'flex-1 ms-3 whitespace-nowrap';
  // const activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  // const nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';

  // const closeDrawer = () => {
  //   drawerHidden = true;
  // };

  // let iconClass =
  //   'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white';
  // let itemClass =
  //   'flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700';
  // let groupClass = 'pt-2 space-y-2';


  // let posts = [
  //   {
  //     name: 'Svelte 4 & 5',
  //     icon: WandMagicSparklesOutline,
  //     children: {
  //       'Getting Started': '/svelte-4/getting-started',
  //       Props: '/svelte-4/props'
  //     }
  //   },
  //   {
  //     name: 'Svelte 5: Runes',
  //     icon: StarOutline,
  //     children: {
  //       'Getting Started': '/svelte-5/getting-started',
  //       Props: '/svelte-5/props'
  //     }
  //   },
  //   { name: 'Outline Icons', icon: FileChartBarOutline, href: '/outline' },
  //   { name: 'Solid Icons', icon: ExpandOutline, href: '/solid' },
  //   {
  //     name: 'Global Icons',
  //     icon: GridPlusOutline,
  //     href: '/guide/global-icons'
  //   },
  //   { name: 'Custom Icons', icon: CogOutline, href: '/guide/custom-icons' }
  // ];
  // let dropdowns = Object.fromEntries(Object.keys(posts).map((x) => [x, false]));
</script>

<Sidebar aclass="p-2" asideclass="hidden lg:block absolute top-20 z-20">
  <SidebarGroup>
    <SidebarItem label="Dashboard">
      {#snippet icon()}
        <WandMagicSparklesOutline
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarDropdownWrapper label="E-commerce" btnclass="p-2">
      {#snippet icon()}
        <StarOutline
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      <SidebarItem label="Sidebar" href="/components/sidebar" />
      <SidebarItem label="Billing" />
      <SidebarItem label="Invoice" />
    </SidebarDropdownWrapper>
    <SidebarItem label="Kanban" {spanclass}>
      {#snippet icon()}
        <CogOutline
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      {#snippet subtext()}
        <span
          class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
        >
          Pro
        </span>
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Inbox" {spanclass}>
      {#snippet icon()}
        <GridPlusOutline
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      {#snippet subtext()}
        <span
          class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
        >
          3
        </span>
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Users">
      {#snippet icon()}
        <FileChartBarOutline
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    
  </SidebarGroup>
</Sidebar>
