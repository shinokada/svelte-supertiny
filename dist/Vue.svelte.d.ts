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
export type VueProps = typeof __propDef.props;
export type VueEvents = typeof __propDef.events;
export type VueSlots = typeof __propDef.slots;
export default class Vue extends SvelteComponent<VueProps, VueEvents, VueSlots> {}
export {};
