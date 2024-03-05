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
export type ChromeProps = typeof __propDef.props;
export type ChromeEvents = typeof __propDef.events;
export type ChromeSlots = typeof __propDef.slots;
export default class Chrome extends SvelteComponent<ChromeProps, ChromeEvents, ChromeSlots> {}
export {};
