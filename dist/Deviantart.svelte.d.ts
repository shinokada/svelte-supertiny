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
export type DeviantartProps = typeof __propDef.props;
export type DeviantartEvents = typeof __propDef.events;
export type DeviantartSlots = typeof __propDef.slots;
export default class Deviantart extends SvelteComponent<
	DeviantartProps,
	DeviantartEvents,
	DeviantartSlots
> {}
export {};
