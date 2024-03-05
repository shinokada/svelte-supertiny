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
export type ZoomProps = typeof __propDef.props;
export type ZoomEvents = typeof __propDef.events;
export type ZoomSlots = typeof __propDef.slots;
export default class Zoom extends SvelteComponent<ZoomProps, ZoomEvents, ZoomSlots> {}
export {};
