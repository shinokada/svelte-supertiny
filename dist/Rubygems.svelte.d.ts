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
export type RubygemsProps = typeof __propDef.props;
export type RubygemsEvents = typeof __propDef.events;
export type RubygemsSlots = typeof __propDef.slots;
export default class Rubygems extends SvelteComponent<
	RubygemsProps,
	RubygemsEvents,
	RubygemsSlots
> {}
export {};
