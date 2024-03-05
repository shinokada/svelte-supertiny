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
export type JellyfinProps = typeof __propDef.props;
export type JellyfinEvents = typeof __propDef.events;
export type JellyfinSlots = typeof __propDef.slots;
export default class Jellyfin extends SvelteComponent<
	JellyfinProps,
	JellyfinEvents,
	JellyfinSlots
> {}
export {};
