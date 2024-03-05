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
export type GogcomProps = typeof __propDef.props;
export type GogcomEvents = typeof __propDef.events;
export type GogcomSlots = typeof __propDef.slots;
export default class Gogcom extends SvelteComponent<GogcomProps, GogcomEvents, GogcomSlots> {}
export {};
