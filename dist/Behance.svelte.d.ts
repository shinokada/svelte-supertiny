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
export type BehanceProps = typeof __propDef.props;
export type BehanceEvents = typeof __propDef.events;
export type BehanceSlots = typeof __propDef.slots;
export default class Behance extends SvelteComponent<BehanceProps, BehanceEvents, BehanceSlots> {}
export {};
