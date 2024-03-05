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
export type OvercastProps = typeof __propDef.props;
export type OvercastEvents = typeof __propDef.events;
export type OvercastSlots = typeof __propDef.slots;
export default class Overcast extends SvelteComponent<
	OvercastProps,
	OvercastEvents,
	OvercastSlots
> {}
export {};
