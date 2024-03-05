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
export type OpensourceProps = typeof __propDef.props;
export type OpensourceEvents = typeof __propDef.events;
export type OpensourceSlots = typeof __propDef.slots;
export default class Opensource extends SvelteComponent<
	OpensourceProps,
	OpensourceEvents,
	OpensourceSlots
> {}
export {};
