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
export type PixelfedProps = typeof __propDef.props;
export type PixelfedEvents = typeof __propDef.events;
export type PixelfedSlots = typeof __propDef.slots;
export default class Pixelfed extends SvelteComponent<
	PixelfedProps,
	PixelfedEvents,
	PixelfedSlots
> {}
export {};
