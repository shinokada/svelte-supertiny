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
export type SkypeProps = typeof __propDef.props;
export type SkypeEvents = typeof __propDef.events;
export type SkypeSlots = typeof __propDef.slots;
export default class Skype extends SvelteComponent<SkypeProps, SkypeEvents, SkypeSlots> {}
export {};
