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
export type YammerProps = typeof __propDef.props;
export type YammerEvents = typeof __propDef.events;
export type YammerSlots = typeof __propDef.slots;
export default class Yammer extends SvelteComponent<YammerProps, YammerEvents, YammerSlots> {}
export {};
