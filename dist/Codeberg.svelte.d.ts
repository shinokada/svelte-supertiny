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
export type CodebergProps = typeof __propDef.props;
export type CodebergEvents = typeof __propDef.events;
export type CodebergSlots = typeof __propDef.slots;
export default class Codeberg extends SvelteComponent<
	CodebergProps,
	CodebergEvents,
	CodebergSlots
> {}
export {};
