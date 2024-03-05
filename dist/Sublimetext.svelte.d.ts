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
export type SublimetextProps = typeof __propDef.props;
export type SublimetextEvents = typeof __propDef.events;
export type SublimetextSlots = typeof __propDef.slots;
export default class Sublimetext extends SvelteComponent<
	SublimetextProps,
	SublimetextEvents,
	SublimetextSlots
> {}
export {};
