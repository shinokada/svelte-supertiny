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
export type WifiProps = typeof __propDef.props;
export type WifiEvents = typeof __propDef.events;
export type WifiSlots = typeof __propDef.slots;
export default class Wifi extends SvelteComponent<WifiProps, WifiEvents, WifiSlots> {}
export {};
