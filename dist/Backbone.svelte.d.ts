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
export type BackboneProps = typeof __propDef.props;
export type BackboneEvents = typeof __propDef.events;
export type BackboneSlots = typeof __propDef.slots;
export default class Backbone extends SvelteComponent<
	BackboneProps,
	BackboneEvents,
	BackboneSlots
> {}
export {};
