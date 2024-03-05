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
export type PatreonProps = typeof __propDef.props;
export type PatreonEvents = typeof __propDef.events;
export type PatreonSlots = typeof __propDef.slots;
export default class Patreon extends SvelteComponent<PatreonProps, PatreonEvents, PatreonSlots> {}
export {};
