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
export type AirbnbProps = typeof __propDef.props;
export type AirbnbEvents = typeof __propDef.events;
export type AirbnbSlots = typeof __propDef.slots;
export default class Airbnb extends SvelteComponent<AirbnbProps, AirbnbEvents, AirbnbSlots> {}
export {};
