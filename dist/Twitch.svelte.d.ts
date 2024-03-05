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
export type TwitchProps = typeof __propDef.props;
export type TwitchEvents = typeof __propDef.events;
export type TwitchSlots = typeof __propDef.slots;
export default class Twitch extends SvelteComponent<TwitchProps, TwitchEvents, TwitchSlots> {}
export {};
