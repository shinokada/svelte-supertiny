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
export type AmberframeworkProps = typeof __propDef.props;
export type AmberframeworkEvents = typeof __propDef.events;
export type AmberframeworkSlots = typeof __propDef.slots;
export default class Amberframework extends SvelteComponent<
	AmberframeworkProps,
	AmberframeworkEvents,
	AmberframeworkSlots
> {}
export {};
