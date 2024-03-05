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
export type StackexchangeProps = typeof __propDef.props;
export type StackexchangeEvents = typeof __propDef.events;
export type StackexchangeSlots = typeof __propDef.slots;
export default class Stackexchange extends SvelteComponent<
	StackexchangeProps,
	StackexchangeEvents,
	StackexchangeSlots
> {}
export {};
