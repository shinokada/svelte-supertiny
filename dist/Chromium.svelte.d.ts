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
export type ChromiumProps = typeof __propDef.props;
export type ChromiumEvents = typeof __propDef.events;
export type ChromiumSlots = typeof __propDef.slots;
export default class Chromium extends SvelteComponent<
	ChromiumProps,
	ChromiumEvents,
	ChromiumSlots
> {}
export {};
