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
export type JqueryProps = typeof __propDef.props;
export type JqueryEvents = typeof __propDef.events;
export type JquerySlots = typeof __propDef.slots;
export default class Jquery extends SvelteComponent<JqueryProps, JqueryEvents, JquerySlots> {}
export {};
