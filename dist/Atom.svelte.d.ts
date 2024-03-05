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
export type AtomProps = typeof __propDef.props;
export type AtomEvents = typeof __propDef.events;
export type AtomSlots = typeof __propDef.slots;
export default class Atom extends SvelteComponent<AtomProps, AtomEvents, AtomSlots> {}
export {};
