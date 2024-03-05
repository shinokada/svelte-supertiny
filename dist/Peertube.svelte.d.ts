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
export type PeertubeProps = typeof __propDef.props;
export type PeertubeEvents = typeof __propDef.events;
export type PeertubeSlots = typeof __propDef.slots;
export default class Peertube extends SvelteComponent<
	PeertubeProps,
	PeertubeEvents,
	PeertubeSlots
> {}
export {};
