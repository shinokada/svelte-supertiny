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
export type MastodonProps = typeof __propDef.props;
export type MastodonEvents = typeof __propDef.events;
export type MastodonSlots = typeof __propDef.slots;
export default class Mastodon extends SvelteComponent<
	MastodonProps,
	MastodonEvents,
	MastodonSlots
> {}
export {};
