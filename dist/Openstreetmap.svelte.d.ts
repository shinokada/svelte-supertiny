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
export type OpenstreetmapProps = typeof __propDef.props;
export type OpenstreetmapEvents = typeof __propDef.events;
export type OpenstreetmapSlots = typeof __propDef.slots;
export default class Openstreetmap extends SvelteComponent<
	OpenstreetmapProps,
	OpenstreetmapEvents,
	OpenstreetmapSlots
> {}
export {};
