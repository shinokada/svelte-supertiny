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
export type DuckduckgoProps = typeof __propDef.props;
export type DuckduckgoEvents = typeof __propDef.events;
export type DuckduckgoSlots = typeof __propDef.slots;
export default class Duckduckgo extends SvelteComponent<
	DuckduckgoProps,
	DuckduckgoEvents,
	DuckduckgoSlots
> {}
export {};
