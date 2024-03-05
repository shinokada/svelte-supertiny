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
export type GoodreadsProps = typeof __propDef.props;
export type GoodreadsEvents = typeof __propDef.events;
export type GoodreadsSlots = typeof __propDef.slots;
export default class Goodreads extends SvelteComponent<
	GoodreadsProps,
	GoodreadsEvents,
	GoodreadsSlots
> {}
export {};
