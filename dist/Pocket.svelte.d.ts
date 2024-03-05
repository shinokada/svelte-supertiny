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
export type PocketProps = typeof __propDef.props;
export type PocketEvents = typeof __propDef.events;
export type PocketSlots = typeof __propDef.slots;
export default class Pocket extends SvelteComponent<PocketProps, PocketEvents, PocketSlots> {}
export {};
