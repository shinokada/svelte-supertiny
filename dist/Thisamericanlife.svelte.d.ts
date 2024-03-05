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
export type ThisamericanlifeProps = typeof __propDef.props;
export type ThisamericanlifeEvents = typeof __propDef.events;
export type ThisamericanlifeSlots = typeof __propDef.slots;
export default class Thisamericanlife extends SvelteComponent<
	ThisamericanlifeProps,
	ThisamericanlifeEvents,
	ThisamericanlifeSlots
> {}
export {};
