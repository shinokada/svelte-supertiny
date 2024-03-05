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
export type QqProps = typeof __propDef.props;
export type QqEvents = typeof __propDef.events;
export type QqSlots = typeof __propDef.slots;
export default class Qq extends SvelteComponent<QqProps, QqEvents, QqSlots> {}
export {};
