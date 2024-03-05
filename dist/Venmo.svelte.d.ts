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
export type VenmoProps = typeof __propDef.props;
export type VenmoEvents = typeof __propDef.events;
export type VenmoSlots = typeof __propDef.slots;
export default class Venmo extends SvelteComponent<VenmoProps, VenmoEvents, VenmoSlots> {}
export {};
