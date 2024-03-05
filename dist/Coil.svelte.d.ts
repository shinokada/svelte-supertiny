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
export type CoilProps = typeof __propDef.props;
export type CoilEvents = typeof __propDef.events;
export type CoilSlots = typeof __propDef.slots;
export default class Coil extends SvelteComponent<CoilProps, CoilEvents, CoilSlots> {}
export {};
