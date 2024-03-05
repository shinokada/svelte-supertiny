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
export type ProtonmailProps = typeof __propDef.props;
export type ProtonmailEvents = typeof __propDef.events;
export type ProtonmailSlots = typeof __propDef.slots;
export default class Protonmail extends SvelteComponent<
	ProtonmailProps,
	ProtonmailEvents,
	ProtonmailSlots
> {}
export {};
