import { SvelteComponent } from 'svelte';
declare const __propDef: {
	props: {
		size?: string | undefined;
		role?: string | undefined;
		ariaLabel?: string | undefined;
		class?: string | undefined;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type DrupalProps = typeof __propDef.props;
export type DrupalEvents = typeof __propDef.events;
export type DrupalSlots = typeof __propDef.slots;
export default class Drupal extends SvelteComponent<DrupalProps, DrupalEvents, DrupalSlots> {}
export {};
