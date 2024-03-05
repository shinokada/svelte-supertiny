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
export type PaypalProps = typeof __propDef.props;
export type PaypalEvents = typeof __propDef.events;
export type PaypalSlots = typeof __propDef.slots;
export default class Paypal extends SvelteComponent<PaypalProps, PaypalEvents, PaypalSlots> {}
export {};
