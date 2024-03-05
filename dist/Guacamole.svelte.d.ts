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
export type GuacamoleProps = typeof __propDef.props;
export type GuacamoleEvents = typeof __propDef.events;
export type GuacamoleSlots = typeof __propDef.slots;
export default class Guacamole extends SvelteComponent<
	GuacamoleProps,
	GuacamoleEvents,
	GuacamoleSlots
> {}
export {};
