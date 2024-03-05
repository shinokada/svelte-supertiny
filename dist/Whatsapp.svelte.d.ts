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
export type WhatsappProps = typeof __propDef.props;
export type WhatsappEvents = typeof __propDef.events;
export type WhatsappSlots = typeof __propDef.slots;
export default class Whatsapp extends SvelteComponent<
	WhatsappProps,
	WhatsappEvents,
	WhatsappSlots
> {}
export {};
