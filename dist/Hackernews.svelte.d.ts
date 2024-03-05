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
export type HackernewsProps = typeof __propDef.props;
export type HackernewsEvents = typeof __propDef.events;
export type HackernewsSlots = typeof __propDef.slots;
export default class Hackernews extends SvelteComponent<
	HackernewsProps,
	HackernewsEvents,
	HackernewsSlots
> {}
export {};
