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
export type KickstarterProps = typeof __propDef.props;
export type KickstarterEvents = typeof __propDef.events;
export type KickstarterSlots = typeof __propDef.slots;
export default class Kickstarter extends SvelteComponent<
	KickstarterProps,
	KickstarterEvents,
	KickstarterSlots
> {}
export {};
