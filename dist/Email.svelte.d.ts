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
export type EmailProps = typeof __propDef.props;
export type EmailEvents = typeof __propDef.events;
export type EmailSlots = typeof __propDef.slots;
export default class Email extends SvelteComponent<EmailProps, EmailEvents, EmailSlots> {}
export {};
