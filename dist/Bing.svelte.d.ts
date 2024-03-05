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
export type BingProps = typeof __propDef.props;
export type BingEvents = typeof __propDef.events;
export type BingSlots = typeof __propDef.slots;
export default class Bing extends SvelteComponent<BingProps, BingEvents, BingSlots> {}
export {};
