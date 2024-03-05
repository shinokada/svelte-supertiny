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
export type WebassemblyProps = typeof __propDef.props;
export type WebassemblyEvents = typeof __propDef.events;
export type WebassemblySlots = typeof __propDef.slots;
export default class Webassembly extends SvelteComponent<
	WebassemblyProps,
	WebassemblyEvents,
	WebassemblySlots
> {}
export {};
