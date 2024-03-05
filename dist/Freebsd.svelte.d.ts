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
export type FreebsdProps = typeof __propDef.props;
export type FreebsdEvents = typeof __propDef.events;
export type FreebsdSlots = typeof __propDef.slots;
export default class Freebsd extends SvelteComponent<FreebsdProps, FreebsdEvents, FreebsdSlots> {}
export {};
