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
export type OpenvpnProps = typeof __propDef.props;
export type OpenvpnEvents = typeof __propDef.events;
export type OpenvpnSlots = typeof __propDef.slots;
export default class Openvpn extends SvelteComponent<OpenvpnProps, OpenvpnEvents, OpenvpnSlots> {}
export {};
