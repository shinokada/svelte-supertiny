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
export type HpProps = typeof __propDef.props;
export type HpEvents = typeof __propDef.events;
export type HpSlots = typeof __propDef.slots;
export default class Hp extends SvelteComponent<HpProps, HpEvents, HpSlots> {}
export {};
