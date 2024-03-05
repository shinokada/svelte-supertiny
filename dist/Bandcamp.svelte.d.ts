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
export type BandcampProps = typeof __propDef.props;
export type BandcampEvents = typeof __propDef.events;
export type BandcampSlots = typeof __propDef.slots;
export default class Bandcamp extends SvelteComponent<
	BandcampProps,
	BandcampEvents,
	BandcampSlots
> {}
export {};
