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
export type BashProps = typeof __propDef.props;
export type BashEvents = typeof __propDef.events;
export type BashSlots = typeof __propDef.slots;
export default class Bash extends SvelteComponent<BashProps, BashEvents, BashSlots> {}
export {};
