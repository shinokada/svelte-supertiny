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
export type StitcherProps = typeof __propDef.props;
export type StitcherEvents = typeof __propDef.events;
export type StitcherSlots = typeof __propDef.slots;
export default class Stitcher extends SvelteComponent<
	StitcherProps,
	StitcherEvents,
	StitcherSlots
> {}
export {};
