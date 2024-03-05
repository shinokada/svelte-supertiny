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
export type JustgivingProps = typeof __propDef.props;
export type JustgivingEvents = typeof __propDef.events;
export type JustgivingSlots = typeof __propDef.slots;
export default class Justgiving extends SvelteComponent<
	JustgivingProps,
	JustgivingEvents,
	JustgivingSlots
> {}
export {};
