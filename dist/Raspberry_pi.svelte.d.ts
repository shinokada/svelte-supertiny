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
export type RaspberryPiProps = typeof __propDef.props;
export type RaspberryPiEvents = typeof __propDef.events;
export type RaspberryPiSlots = typeof __propDef.slots;
export default class RaspberryPi extends SvelteComponent<
	RaspberryPiProps,
	RaspberryPiEvents,
	RaspberryPiSlots
> {}
export {};
