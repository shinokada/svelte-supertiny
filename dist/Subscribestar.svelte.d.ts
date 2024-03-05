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
export type SubscribestarProps = typeof __propDef.props;
export type SubscribestarEvents = typeof __propDef.events;
export type SubscribestarSlots = typeof __propDef.slots;
export default class Subscribestar extends SvelteComponent<
	SubscribestarProps,
	SubscribestarEvents,
	SubscribestarSlots
> {}
export {};
