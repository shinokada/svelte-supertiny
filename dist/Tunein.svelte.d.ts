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
export type TuneinProps = typeof __propDef.props;
export type TuneinEvents = typeof __propDef.events;
export type TuneinSlots = typeof __propDef.slots;
export default class Tunein extends SvelteComponent<TuneinProps, TuneinEvents, TuneinSlots> {}
export {};
