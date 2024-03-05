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
export type GooglePlusProps = typeof __propDef.props;
export type GooglePlusEvents = typeof __propDef.events;
export type GooglePlusSlots = typeof __propDef.slots;
export default class GooglePlus extends SvelteComponent<
	GooglePlusProps,
	GooglePlusEvents,
	GooglePlusSlots
> {}
export {};
