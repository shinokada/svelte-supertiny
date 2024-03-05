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
export type StumbleuponProps = typeof __propDef.props;
export type StumbleuponEvents = typeof __propDef.events;
export type StumbleuponSlots = typeof __propDef.slots;
export default class Stumbleupon extends SvelteComponent<
	StumbleuponProps,
	StumbleuponEvents,
	StumbleuponSlots
> {}
export {};
