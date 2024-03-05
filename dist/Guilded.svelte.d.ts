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
export type GuildedProps = typeof __propDef.props;
export type GuildedEvents = typeof __propDef.events;
export type GuildedSlots = typeof __propDef.slots;
export default class Guilded extends SvelteComponent<GuildedProps, GuildedEvents, GuildedSlots> {}
export {};
