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
export type SlideshareProps = typeof __propDef.props;
export type SlideshareEvents = typeof __propDef.events;
export type SlideshareSlots = typeof __propDef.slots;
export default class Slideshare extends SvelteComponent<
	SlideshareProps,
	SlideshareEvents,
	SlideshareSlots
> {}
export {};
