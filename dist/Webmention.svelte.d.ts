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
export type WebmentionProps = typeof __propDef.props;
export type WebmentionEvents = typeof __propDef.events;
export type WebmentionSlots = typeof __propDef.slots;
export default class Webmention extends SvelteComponent<
	WebmentionProps,
	WebmentionEvents,
	WebmentionSlots
> {}
export {};
