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
export type WebtoonsProps = typeof __propDef.props;
export type WebtoonsEvents = typeof __propDef.events;
export type WebtoonsSlots = typeof __propDef.slots;
export default class Webtoons extends SvelteComponent<
	WebtoonsProps,
	WebtoonsEvents,
	WebtoonsSlots
> {}
export {};
