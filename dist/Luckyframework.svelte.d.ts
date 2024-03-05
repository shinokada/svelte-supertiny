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
export type LuckyframeworkProps = typeof __propDef.props;
export type LuckyframeworkEvents = typeof __propDef.events;
export type LuckyframeworkSlots = typeof __propDef.slots;
export default class Luckyframework extends SvelteComponent<
	LuckyframeworkProps,
	LuckyframeworkEvents,
	LuckyframeworkSlots
> {}
export {};
