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
export type KotlinProps = typeof __propDef.props;
export type KotlinEvents = typeof __propDef.events;
export type KotlinSlots = typeof __propDef.slots;
export default class Kotlin extends SvelteComponent<KotlinProps, KotlinEvents, KotlinSlots> {}
export {};
