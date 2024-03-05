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
export type KoFiProps = typeof __propDef.props;
export type KoFiEvents = typeof __propDef.events;
export type KoFiSlots = typeof __propDef.slots;
export default class KoFi extends SvelteComponent<KoFiProps, KoFiEvents, KoFiSlots> {}
export {};
