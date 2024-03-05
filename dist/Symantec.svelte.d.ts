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
export type SymantecProps = typeof __propDef.props;
export type SymantecEvents = typeof __propDef.events;
export type SymantecSlots = typeof __propDef.slots;
export default class Symantec extends SvelteComponent<
	SymantecProps,
	SymantecEvents,
	SymantecSlots
> {}
export {};
