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
export type AppleProps = typeof __propDef.props;
export type AppleEvents = typeof __propDef.events;
export type AppleSlots = typeof __propDef.slots;
export default class Apple extends SvelteComponent<AppleProps, AppleEvents, AppleSlots> {}
export {};
