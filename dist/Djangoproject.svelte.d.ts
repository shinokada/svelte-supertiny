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
export type DjangoprojectProps = typeof __propDef.props;
export type DjangoprojectEvents = typeof __propDef.events;
export type DjangoprojectSlots = typeof __propDef.slots;
export default class Djangoproject extends SvelteComponent<
	DjangoprojectProps,
	DjangoprojectEvents,
	DjangoprojectSlots
> {}
export {};
