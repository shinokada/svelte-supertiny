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
export type SvelteProps = typeof __propDef.props;
export type SvelteEvents = typeof __propDef.events;
export type SvelteSlots = typeof __propDef.slots;
export default class Svelte extends SvelteComponent<SvelteProps, SvelteEvents, SvelteSlots> {}
export {};
