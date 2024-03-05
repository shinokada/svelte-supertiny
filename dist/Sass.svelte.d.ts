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
export type SassProps = typeof __propDef.props;
export type SassEvents = typeof __propDef.events;
export type SassSlots = typeof __propDef.slots;
export default class Sass extends SvelteComponent<SassProps, SassEvents, SassSlots> {}
export {};
