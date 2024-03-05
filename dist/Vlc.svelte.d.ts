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
export type VlcProps = typeof __propDef.props;
export type VlcEvents = typeof __propDef.events;
export type VlcSlots = typeof __propDef.slots;
export default class Vlc extends SvelteComponent<VlcProps, VlcEvents, VlcSlots> {}
export {};
