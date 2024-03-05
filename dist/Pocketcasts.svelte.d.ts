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
export type PocketcastsProps = typeof __propDef.props;
export type PocketcastsEvents = typeof __propDef.events;
export type PocketcastsSlots = typeof __propDef.slots;
export default class Pocketcasts extends SvelteComponent<
	PocketcastsProps,
	PocketcastsEvents,
	PocketcastsSlots
> {}
export {};
