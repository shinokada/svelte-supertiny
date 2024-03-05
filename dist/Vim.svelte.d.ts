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
export type VimProps = typeof __propDef.props;
export type VimEvents = typeof __propDef.events;
export type VimSlots = typeof __propDef.slots;
export default class Vim extends SvelteComponent<VimProps, VimEvents, VimSlots> {}
export {};
