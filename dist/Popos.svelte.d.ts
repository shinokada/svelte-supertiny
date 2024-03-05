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
export type PoposProps = typeof __propDef.props;
export type PoposEvents = typeof __propDef.events;
export type PoposSlots = typeof __propDef.slots;
export default class Popos extends SvelteComponent<PoposProps, PoposEvents, PoposSlots> {}
export {};
