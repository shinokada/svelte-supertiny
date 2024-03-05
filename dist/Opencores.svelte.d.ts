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
export type OpencoresProps = typeof __propDef.props;
export type OpencoresEvents = typeof __propDef.events;
export type OpencoresSlots = typeof __propDef.slots;
export default class Opencores extends SvelteComponent<
	OpencoresProps,
	OpencoresEvents,
	OpencoresSlots
> {}
export {};
