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
export type EthereumProps = typeof __propDef.props;
export type EthereumEvents = typeof __propDef.events;
export type EthereumSlots = typeof __propDef.slots;
export default class Ethereum extends SvelteComponent<
	EthereumProps,
	EthereumEvents,
	EthereumSlots
> {}
export {};
