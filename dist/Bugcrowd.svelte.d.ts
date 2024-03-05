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
export type BugcrowdProps = typeof __propDef.props;
export type BugcrowdEvents = typeof __propDef.events;
export type BugcrowdSlots = typeof __propDef.slots;
export default class Bugcrowd extends SvelteComponent<
	BugcrowdProps,
	BugcrowdEvents,
	BugcrowdSlots
> {}
export {};
