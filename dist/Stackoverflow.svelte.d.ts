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
export type StackoverflowProps = typeof __propDef.props;
export type StackoverflowEvents = typeof __propDef.events;
export type StackoverflowSlots = typeof __propDef.slots;
export default class Stackoverflow extends SvelteComponent<
	StackoverflowProps,
	StackoverflowEvents,
	StackoverflowSlots
> {}
export {};
