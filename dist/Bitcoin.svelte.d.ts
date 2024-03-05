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
export type BitcoinProps = typeof __propDef.props;
export type BitcoinEvents = typeof __propDef.events;
export type BitcoinSlots = typeof __propDef.slots;
export default class Bitcoin extends SvelteComponent<BitcoinProps, BitcoinEvents, BitcoinSlots> {}
export {};
