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
export type RubyProps = typeof __propDef.props;
export type RubyEvents = typeof __propDef.events;
export type RubySlots = typeof __propDef.slots;
export default class Ruby extends SvelteComponent<RubyProps, RubyEvents, RubySlots> {}
export {};
