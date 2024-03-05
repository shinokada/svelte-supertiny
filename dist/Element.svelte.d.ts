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
export type ElementProps = typeof __propDef.props;
export type ElementEvents = typeof __propDef.events;
export type ElementSlots = typeof __propDef.slots;
export default class Element extends SvelteComponent<ElementProps, ElementEvents, ElementSlots> {}
export {};
