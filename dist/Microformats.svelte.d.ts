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
export type MicroformatsProps = typeof __propDef.props;
export type MicroformatsEvents = typeof __propDef.events;
export type MicroformatsSlots = typeof __propDef.slots;
export default class Microformats extends SvelteComponent<
	MicroformatsProps,
	MicroformatsEvents,
	MicroformatsSlots
> {}
export {};
