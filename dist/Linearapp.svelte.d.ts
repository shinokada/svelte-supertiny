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
export type LinearappProps = typeof __propDef.props;
export type LinearappEvents = typeof __propDef.events;
export type LinearappSlots = typeof __propDef.slots;
export default class Linearapp extends SvelteComponent<
	LinearappProps,
	LinearappEvents,
	LinearappSlots
> {}
export {};
