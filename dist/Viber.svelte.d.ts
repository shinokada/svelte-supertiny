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
export type ViberProps = typeof __propDef.props;
export type ViberEvents = typeof __propDef.events;
export type ViberSlots = typeof __propDef.slots;
export default class Viber extends SvelteComponent<ViberProps, ViberEvents, ViberSlots> {}
export {};
