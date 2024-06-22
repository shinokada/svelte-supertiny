import type { ComponentType } from 'svelte';

export type Title = string;

export type Card = {
  title: string;
  description: string;
  icon: ComponentType;
  icon_class: string;
};

export type CardType = {
  title: string;
  description: string;
  icon: ComponentType;
  href?: string;
  icon_class?: string;
};

export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
}

export type ListType = {
  name: string;
  href?: string;
  icon?: ComponentType;
  children?: ListType[];
};
