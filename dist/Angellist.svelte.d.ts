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
export type AngellistProps = typeof __propDef.props;
export type AngellistEvents = typeof __propDef.events;
export type AngellistSlots = typeof __propDef.slots;
export default class Angellist extends SvelteComponent<
	AngellistProps,
	AngellistEvents,
	AngellistSlots
> {}
export {};
