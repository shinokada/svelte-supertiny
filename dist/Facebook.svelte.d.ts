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
export type FacebookProps = typeof __propDef.props;
export type FacebookEvents = typeof __propDef.events;
export type FacebookSlots = typeof __propDef.slots;
export default class Facebook extends SvelteComponent<
	FacebookProps,
	FacebookEvents,
	FacebookSlots
> {}
export {};
