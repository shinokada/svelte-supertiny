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
export type SquareCashProps = typeof __propDef.props;
export type SquareCashEvents = typeof __propDef.events;
export type SquareCashSlots = typeof __propDef.slots;
export default class SquareCash extends SvelteComponent<
	SquareCashProps,
	SquareCashEvents,
	SquareCashSlots
> {}
export {};
