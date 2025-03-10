import type { Component } from 'svelte';
import { type ListType, sidebarList, GridPlusOutline } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Icons',
    Icon: GridPlusOutline as Component,
    href: '/icons'
  }
];

export const newSidebarList: ListType[] = [
	...(Array.isArray(sidebarList) ? sidebarList : []),
	...extra
];