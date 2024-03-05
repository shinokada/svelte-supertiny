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
export type BitwardenProps = typeof __propDef.props;
export type BitwardenEvents = typeof __propDef.events;
export type BitwardenSlots = typeof __propDef.slots;
export default class Bitwarden extends SvelteComponent<
	BitwardenProps,
	BitwardenEvents,
	BitwardenSlots
> {}
export {};
