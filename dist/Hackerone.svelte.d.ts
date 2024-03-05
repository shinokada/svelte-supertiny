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
export type HackeroneProps = typeof __propDef.props;
export type HackeroneEvents = typeof __propDef.events;
export type HackeroneSlots = typeof __propDef.slots;
export default class Hackerone extends SvelteComponent<
	HackeroneProps,
	HackeroneEvents,
	HackeroneSlots
> {}
export {};
