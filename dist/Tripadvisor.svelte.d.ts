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
export type TripadvisorProps = typeof __propDef.props;
export type TripadvisorEvents = typeof __propDef.events;
export type TripadvisorSlots = typeof __propDef.slots;
export default class Tripadvisor extends SvelteComponent<
	TripadvisorProps,
	TripadvisorEvents,
	TripadvisorSlots
> {}
export {};
