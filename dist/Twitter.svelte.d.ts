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
export type TwitterProps = typeof __propDef.props;
export type TwitterEvents = typeof __propDef.events;
export type TwitterSlots = typeof __propDef.slots;
export default class Twitter extends SvelteComponent<TwitterProps, TwitterEvents, TwitterSlots> {}
export {};
