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
export type CoinpotProps = typeof __propDef.props;
export type CoinpotEvents = typeof __propDef.events;
export type CoinpotSlots = typeof __propDef.slots;
export default class Coinpot extends SvelteComponent<CoinpotProps, CoinpotEvents, CoinpotSlots> {}
export {};
