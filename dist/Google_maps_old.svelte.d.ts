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
export type GoogleMapsOldProps = typeof __propDef.props;
export type GoogleMapsOldEvents = typeof __propDef.events;
export type GoogleMapsOldSlots = typeof __propDef.slots;
export default class GoogleMapsOld extends SvelteComponent<
	GoogleMapsOldProps,
	GoogleMapsOldEvents,
	GoogleMapsOldSlots
> {}
export {};
