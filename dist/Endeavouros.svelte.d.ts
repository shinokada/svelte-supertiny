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
export type EndeavourosProps = typeof __propDef.props;
export type EndeavourosEvents = typeof __propDef.events;
export type EndeavourosSlots = typeof __propDef.slots;
export default class Endeavouros extends SvelteComponent<
	EndeavourosProps,
	EndeavourosEvents,
	EndeavourosSlots
> {}
export {};
