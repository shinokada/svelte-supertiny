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
export type WireguardProps = typeof __propDef.props;
export type WireguardEvents = typeof __propDef.events;
export type WireguardSlots = typeof __propDef.slots;
export default class Wireguard extends SvelteComponent<
	WireguardProps,
	WireguardEvents,
	WireguardSlots
> {}
export {};
