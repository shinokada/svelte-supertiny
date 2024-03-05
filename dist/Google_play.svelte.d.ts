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
export type GooglePlayProps = typeof __propDef.props;
export type GooglePlayEvents = typeof __propDef.events;
export type GooglePlaySlots = typeof __propDef.slots;
export default class GooglePlay extends SvelteComponent<
	GooglePlayProps,
	GooglePlayEvents,
	GooglePlaySlots
> {}
export {};
