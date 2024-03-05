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
export type LinkedinProps = typeof __propDef.props;
export type LinkedinEvents = typeof __propDef.events;
export type LinkedinSlots = typeof __propDef.slots;
export default class Linkedin extends SvelteComponent<
	LinkedinProps,
	LinkedinEvents,
	LinkedinSlots
> {}
export {};
