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
export type OpencastProps = typeof __propDef.props;
export type OpencastEvents = typeof __propDef.events;
export type OpencastSlots = typeof __propDef.slots;
export default class Opencast extends SvelteComponent<
	OpencastProps,
	OpencastEvents,
	OpencastSlots
> {}
export {};
