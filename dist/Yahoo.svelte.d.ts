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
export type YahooProps = typeof __propDef.props;
export type YahooEvents = typeof __propDef.events;
export type YahooSlots = typeof __propDef.slots;
export default class Yahoo extends SvelteComponent<YahooProps, YahooEvents, YahooSlots> {}
export {};
