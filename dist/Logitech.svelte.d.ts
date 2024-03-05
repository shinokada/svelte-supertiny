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
export type LogitechProps = typeof __propDef.props;
export type LogitechEvents = typeof __propDef.events;
export type LogitechSlots = typeof __propDef.slots;
export default class Logitech extends SvelteComponent<
	LogitechProps,
	LogitechEvents,
	LogitechSlots
> {}
export {};
