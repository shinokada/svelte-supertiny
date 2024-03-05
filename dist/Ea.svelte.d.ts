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
export type EaProps = typeof __propDef.props;
export type EaEvents = typeof __propDef.events;
export type EaSlots = typeof __propDef.slots;
export default class Ea extends SvelteComponent<EaProps, EaEvents, EaSlots> {}
export {};
