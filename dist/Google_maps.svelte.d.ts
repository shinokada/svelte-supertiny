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
export type GoogleMapsProps = typeof __propDef.props;
export type GoogleMapsEvents = typeof __propDef.events;
export type GoogleMapsSlots = typeof __propDef.slots;
export default class GoogleMaps extends SvelteComponent<
	GoogleMapsProps,
	GoogleMapsEvents,
	GoogleMapsSlots
> {}
export {};
