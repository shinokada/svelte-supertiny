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
export type FlattrProps = typeof __propDef.props;
export type FlattrEvents = typeof __propDef.events;
export type FlattrSlots = typeof __propDef.slots;
export default class Flattr extends SvelteComponent<FlattrProps, FlattrEvents, FlattrSlots> {}
export {};
