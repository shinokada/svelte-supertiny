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
export type ActivitypubProps = typeof __propDef.props;
export type ActivitypubEvents = typeof __propDef.events;
export type ActivitypubSlots = typeof __propDef.slots;
export default class Activitypub extends SvelteComponent<
	ActivitypubProps,
	ActivitypubEvents,
	ActivitypubSlots
> {}
export {};
