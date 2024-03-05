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
export type JsonfeedProps = typeof __propDef.props;
export type JsonfeedEvents = typeof __propDef.events;
export type JsonfeedSlots = typeof __propDef.slots;
export default class Jsonfeed extends SvelteComponent<
	JsonfeedProps,
	JsonfeedEvents,
	JsonfeedSlots
> {}
export {};
