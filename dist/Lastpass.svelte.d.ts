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
export type LastpassProps = typeof __propDef.props;
export type LastpassEvents = typeof __propDef.events;
export type LastpassSlots = typeof __propDef.slots;
export default class Lastpass extends SvelteComponent<
	LastpassProps,
	LastpassEvents,
	LastpassSlots
> {}
export {};
