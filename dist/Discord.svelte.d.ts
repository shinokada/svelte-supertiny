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
export type DiscordProps = typeof __propDef.props;
export type DiscordEvents = typeof __propDef.events;
export type DiscordSlots = typeof __propDef.slots;
export default class Discord extends SvelteComponent<DiscordProps, DiscordEvents, DiscordSlots> {}
export {};
