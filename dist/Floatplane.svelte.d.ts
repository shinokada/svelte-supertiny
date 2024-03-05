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
export type FloatplaneProps = typeof __propDef.props;
export type FloatplaneEvents = typeof __propDef.events;
export type FloatplaneSlots = typeof __propDef.slots;
export default class Floatplane extends SvelteComponent<
	FloatplaneProps,
	FloatplaneEvents,
	FloatplaneSlots
> {}
export {};
