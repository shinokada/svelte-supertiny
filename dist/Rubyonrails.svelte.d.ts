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
export type RubyonrailsProps = typeof __propDef.props;
export type RubyonrailsEvents = typeof __propDef.events;
export type RubyonrailsSlots = typeof __propDef.slots;
export default class Rubyonrails extends SvelteComponent<
	RubyonrailsProps,
	RubyonrailsEvents,
	RubyonrailsSlots
> {}
export {};
