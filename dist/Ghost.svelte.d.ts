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
export type GhostProps = typeof __propDef.props;
export type GhostEvents = typeof __propDef.events;
export type GhostSlots = typeof __propDef.slots;
export default class Ghost extends SvelteComponent<GhostProps, GhostEvents, GhostSlots> {}
export {};
