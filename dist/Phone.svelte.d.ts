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
export type PhoneProps = typeof __propDef.props;
export type PhoneEvents = typeof __propDef.events;
export type PhoneSlots = typeof __propDef.slots;
export default class Phone extends SvelteComponent<PhoneProps, PhoneEvents, PhoneSlots> {}
export {};
