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
export type EspressifProps = typeof __propDef.props;
export type EspressifEvents = typeof __propDef.events;
export type EspressifSlots = typeof __propDef.slots;
export default class Espressif extends SvelteComponent<
	EspressifProps,
	EspressifEvents,
	EspressifSlots
> {}
export {};
