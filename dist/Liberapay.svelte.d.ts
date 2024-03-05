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
export type LiberapayProps = typeof __propDef.props;
export type LiberapayEvents = typeof __propDef.events;
export type LiberapaySlots = typeof __propDef.slots;
export default class Liberapay extends SvelteComponent<
	LiberapayProps,
	LiberapayEvents,
	LiberapaySlots
> {}
export {};
