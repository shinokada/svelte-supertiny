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
export type PinboardProps = typeof __propDef.props;
export type PinboardEvents = typeof __propDef.events;
export type PinboardSlots = typeof __propDef.slots;
export default class Pinboard extends SvelteComponent<
	PinboardProps,
	PinboardEvents,
	PinboardSlots
> {}
export {};
