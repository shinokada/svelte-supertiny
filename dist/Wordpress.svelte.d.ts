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
export type WordpressProps = typeof __propDef.props;
export type WordpressEvents = typeof __propDef.events;
export type WordpressSlots = typeof __propDef.slots;
export default class Wordpress extends SvelteComponent<
	WordpressProps,
	WordpressEvents,
	WordpressSlots
> {}
export {};
