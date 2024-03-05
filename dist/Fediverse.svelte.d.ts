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
export type FediverseProps = typeof __propDef.props;
export type FediverseEvents = typeof __propDef.events;
export type FediverseSlots = typeof __propDef.slots;
export default class Fediverse extends SvelteComponent<
	FediverseProps,
	FediverseEvents,
	FediverseSlots
> {}
export {};
