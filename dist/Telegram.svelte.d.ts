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
export type TelegramProps = typeof __propDef.props;
export type TelegramEvents = typeof __propDef.events;
export type TelegramSlots = typeof __propDef.slots;
export default class Telegram extends SvelteComponent<
	TelegramProps,
	TelegramEvents,
	TelegramSlots
> {}
export {};
