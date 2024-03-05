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
export type PlexProps = typeof __propDef.props;
export type PlexEvents = typeof __propDef.events;
export type PlexSlots = typeof __propDef.slots;
export default class Plex extends SvelteComponent<PlexProps, PlexEvents, PlexSlots> {}
export {};
