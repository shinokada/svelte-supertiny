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
export type BadooProps = typeof __propDef.props;
export type BadooEvents = typeof __propDef.events;
export type BadooSlots = typeof __propDef.slots;
export default class Badoo extends SvelteComponent<BadooProps, BadooEvents, BadooSlots> {}
export {};
