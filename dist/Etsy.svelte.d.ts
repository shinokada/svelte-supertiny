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
export type EtsyProps = typeof __propDef.props;
export type EtsyEvents = typeof __propDef.events;
export type EtsySlots = typeof __propDef.slots;
export default class Etsy extends SvelteComponent<EtsyProps, EtsyEvents, EtsySlots> {}
export {};
