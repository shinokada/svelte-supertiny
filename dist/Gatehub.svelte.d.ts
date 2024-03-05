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
export type GatehubProps = typeof __propDef.props;
export type GatehubEvents = typeof __propDef.events;
export type GatehubSlots = typeof __propDef.slots;
export default class Gatehub extends SvelteComponent<GatehubProps, GatehubEvents, GatehubSlots> {}
export {};
