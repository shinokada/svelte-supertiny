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
export type PinterestProps = typeof __propDef.props;
export type PinterestEvents = typeof __propDef.events;
export type PinterestSlots = typeof __propDef.slots;
export default class Pinterest extends SvelteComponent<
	PinterestProps,
	PinterestEvents,
	PinterestSlots
> {}
export {};
