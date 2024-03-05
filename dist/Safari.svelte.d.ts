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
export type SafariProps = typeof __propDef.props;
export type SafariEvents = typeof __propDef.events;
export type SafariSlots = typeof __propDef.slots;
export default class Safari extends SvelteComponent<SafariProps, SafariEvents, SafariSlots> {}
export {};
