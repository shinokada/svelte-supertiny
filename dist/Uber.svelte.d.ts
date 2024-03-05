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
export type UberProps = typeof __propDef.props;
export type UberEvents = typeof __propDef.events;
export type UberSlots = typeof __propDef.slots;
export default class Uber extends SvelteComponent<UberProps, UberEvents, UberSlots> {}
export {};
