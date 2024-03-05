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
export type GmailOldProps = typeof __propDef.props;
export type GmailOldEvents = typeof __propDef.events;
export type GmailOldSlots = typeof __propDef.slots;
export default class GmailOld extends SvelteComponent<
	GmailOldProps,
	GmailOldEvents,
	GmailOldSlots
> {}
export {};
