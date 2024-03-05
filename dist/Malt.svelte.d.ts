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
export type MaltProps = typeof __propDef.props;
export type MaltEvents = typeof __propDef.events;
export type MaltSlots = typeof __propDef.slots;
export default class Malt extends SvelteComponent<MaltProps, MaltEvents, MaltSlots> {}
export {};
