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
export type UnicodeProps = typeof __propDef.props;
export type UnicodeEvents = typeof __propDef.events;
export type UnicodeSlots = typeof __propDef.slots;
export default class Unicode extends SvelteComponent<UnicodeProps, UnicodeEvents, UnicodeSlots> {}
export {};
