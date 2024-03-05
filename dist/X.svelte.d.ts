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
export type XProps = typeof __propDef.props;
export type XEvents = typeof __propDef.events;
export type XSlots = typeof __propDef.slots;
export default class X extends SvelteComponent<XProps, XEvents, XSlots> {}
export {};
