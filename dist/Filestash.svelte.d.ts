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
export type FilestashProps = typeof __propDef.props;
export type FilestashEvents = typeof __propDef.events;
export type FilestashSlots = typeof __propDef.slots;
export default class Filestash extends SvelteComponent<
	FilestashProps,
	FilestashEvents,
	FilestashSlots
> {}
export {};
