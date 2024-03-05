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
export type EbayProps = typeof __propDef.props;
export type EbayEvents = typeof __propDef.events;
export type EbaySlots = typeof __propDef.slots;
export default class Ebay extends SvelteComponent<EbayProps, EbayEvents, EbaySlots> {}
export {};
