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
export type NetbeansProps = typeof __propDef.props;
export type NetbeansEvents = typeof __propDef.events;
export type NetbeansSlots = typeof __propDef.slots;
export default class Netbeans extends SvelteComponent<
	NetbeansProps,
	NetbeansEvents,
	NetbeansSlots
> {}
export {};
