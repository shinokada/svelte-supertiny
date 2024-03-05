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
export type MailProps = typeof __propDef.props;
export type MailEvents = typeof __propDef.events;
export type MailSlots = typeof __propDef.slots;
export default class Mail extends SvelteComponent<MailProps, MailEvents, MailSlots> {}
export {};
