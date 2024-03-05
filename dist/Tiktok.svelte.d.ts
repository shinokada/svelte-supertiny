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
export type TiktokProps = typeof __propDef.props;
export type TiktokEvents = typeof __propDef.events;
export type TiktokSlots = typeof __propDef.slots;
export default class Tiktok extends SvelteComponent<TiktokProps, TiktokEvents, TiktokSlots> {}
export {};
