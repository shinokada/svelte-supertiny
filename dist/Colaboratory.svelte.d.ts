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
export type ColaboratoryProps = typeof __propDef.props;
export type ColaboratoryEvents = typeof __propDef.events;
export type ColaboratorySlots = typeof __propDef.slots;
export default class Colaboratory extends SvelteComponent<
	ColaboratoryProps,
	ColaboratoryEvents,
	ColaboratorySlots
> {}
export {};
