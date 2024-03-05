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
export type ElementaryosProps = typeof __propDef.props;
export type ElementaryosEvents = typeof __propDef.events;
export type ElementaryosSlots = typeof __propDef.slots;
export default class Elementaryos extends SvelteComponent<
	ElementaryosProps,
	ElementaryosEvents,
	ElementaryosSlots
> {}
export {};
