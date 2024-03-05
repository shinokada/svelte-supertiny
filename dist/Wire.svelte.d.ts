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
export type WireProps = typeof __propDef.props;
export type WireEvents = typeof __propDef.events;
export type WireSlots = typeof __propDef.slots;
export default class Wire extends SvelteComponent<WireProps, WireEvents, WireSlots> {}
export {};
