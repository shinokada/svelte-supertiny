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
export type GmailProps = typeof __propDef.props;
export type GmailEvents = typeof __propDef.events;
export type GmailSlots = typeof __propDef.slots;
export default class Gmail extends SvelteComponent<GmailProps, GmailEvents, GmailSlots> {}
export {};
