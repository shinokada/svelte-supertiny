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
export type FreecodecampProps = typeof __propDef.props;
export type FreecodecampEvents = typeof __propDef.events;
export type FreecodecampSlots = typeof __propDef.slots;
export default class Freecodecamp extends SvelteComponent<
	FreecodecampProps,
	FreecodecampEvents,
	FreecodecampSlots
> {}
export {};
