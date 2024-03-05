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
export type UplayProps = typeof __propDef.props;
export type UplayEvents = typeof __propDef.events;
export type UplaySlots = typeof __propDef.slots;
export default class Uplay extends SvelteComponent<UplayProps, UplayEvents, UplaySlots> {}
export {};
