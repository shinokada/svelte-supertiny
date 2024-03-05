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
export type FinderProps = typeof __propDef.props;
export type FinderEvents = typeof __propDef.events;
export type FinderSlots = typeof __propDef.slots;
export default class Finder extends SvelteComponent<FinderProps, FinderEvents, FinderSlots> {}
export {};
