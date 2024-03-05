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
export type DeliciousProps = typeof __propDef.props;
export type DeliciousEvents = typeof __propDef.events;
export type DeliciousSlots = typeof __propDef.slots;
export default class Delicious extends SvelteComponent<
	DeliciousProps,
	DeliciousEvents,
	DeliciousSlots
> {}
export {};
