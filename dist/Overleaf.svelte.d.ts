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
export type OverleafProps = typeof __propDef.props;
export type OverleafEvents = typeof __propDef.events;
export type OverleafSlots = typeof __propDef.slots;
export default class Overleaf extends SvelteComponent<
	OverleafProps,
	OverleafEvents,
	OverleafSlots
> {}
export {};
