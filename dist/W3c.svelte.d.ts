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
export type W3cProps = typeof __propDef.props;
export type W3cEvents = typeof __propDef.events;
export type W3cSlots = typeof __propDef.slots;
export default class W3c extends SvelteComponent<W3cProps, W3cEvents, W3cSlots> {}
export {};
