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
export type SemaphoreciProps = typeof __propDef.props;
export type SemaphoreciEvents = typeof __propDef.events;
export type SemaphoreciSlots = typeof __propDef.slots;
export default class Semaphoreci extends SvelteComponent<
	SemaphoreciProps,
	SemaphoreciEvents,
	SemaphoreciSlots
> {}
export {};
