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
export type HamlProps = typeof __propDef.props;
export type HamlEvents = typeof __propDef.events;
export type HamlSlots = typeof __propDef.slots;
export default class Haml extends SvelteComponent<HamlProps, HamlEvents, HamlSlots> {}
export {};
