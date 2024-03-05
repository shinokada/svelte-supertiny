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
export type AndotpProps = typeof __propDef.props;
export type AndotpEvents = typeof __propDef.events;
export type AndotpSlots = typeof __propDef.slots;
export default class Andotp extends SvelteComponent<AndotpProps, AndotpEvents, AndotpSlots> {}
export {};
