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
export type WhatwgProps = typeof __propDef.props;
export type WhatwgEvents = typeof __propDef.events;
export type WhatwgSlots = typeof __propDef.slots;
export default class Whatwg extends SvelteComponent<WhatwgProps, WhatwgEvents, WhatwgSlots> {}
export {};
