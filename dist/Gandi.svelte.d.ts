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
export type GandiProps = typeof __propDef.props;
export type GandiEvents = typeof __propDef.events;
export type GandiSlots = typeof __propDef.slots;
export default class Gandi extends SvelteComponent<GandiProps, GandiEvents, GandiSlots> {}
export {};
