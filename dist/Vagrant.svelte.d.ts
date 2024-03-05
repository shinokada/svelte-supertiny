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
export type VagrantProps = typeof __propDef.props;
export type VagrantEvents = typeof __propDef.events;
export type VagrantSlots = typeof __propDef.slots;
export default class Vagrant extends SvelteComponent<VagrantProps, VagrantEvents, VagrantSlots> {}
export {};
