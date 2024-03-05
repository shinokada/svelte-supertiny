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
export type IntercomProps = typeof __propDef.props;
export type IntercomEvents = typeof __propDef.events;
export type IntercomSlots = typeof __propDef.slots;
export default class Intercom extends SvelteComponent<
	IntercomProps,
	IntercomEvents,
	IntercomSlots
> {}
export {};
