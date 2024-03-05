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
export type LobstersProps = typeof __propDef.props;
export type LobstersEvents = typeof __propDef.events;
export type LobstersSlots = typeof __propDef.slots;
export default class Lobsters extends SvelteComponent<
	LobstersProps,
	LobstersEvents,
	LobstersSlots
> {}
export {};
