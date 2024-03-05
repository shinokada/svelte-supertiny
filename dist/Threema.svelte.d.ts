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
export type ThreemaProps = typeof __propDef.props;
export type ThreemaEvents = typeof __propDef.events;
export type ThreemaSlots = typeof __propDef.slots;
export default class Threema extends SvelteComponent<ThreemaProps, ThreemaEvents, ThreemaSlots> {}
export {};
