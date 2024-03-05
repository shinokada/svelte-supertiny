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
export type XingProps = typeof __propDef.props;
export type XingEvents = typeof __propDef.events;
export type XingSlots = typeof __propDef.slots;
export default class Xing extends SvelteComponent<XingProps, XingEvents, XingSlots> {}
export {};
