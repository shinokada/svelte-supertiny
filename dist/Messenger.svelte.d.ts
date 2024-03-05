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
export type MessengerProps = typeof __propDef.props;
export type MessengerEvents = typeof __propDef.events;
export type MessengerSlots = typeof __propDef.slots;
export default class Messenger extends SvelteComponent<
	MessengerProps,
	MessengerEvents,
	MessengerSlots
> {}
export {};
