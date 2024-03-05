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
export type OpencollectiveProps = typeof __propDef.props;
export type OpencollectiveEvents = typeof __propDef.events;
export type OpencollectiveSlots = typeof __propDef.slots;
export default class Opencollective extends SvelteComponent<
	OpencollectiveProps,
	OpencollectiveEvents,
	OpencollectiveSlots
> {}
export {};
